import { ethers } from "ethers";
import { Interface } from "ethers/lib/utils";
import vestingAbi from "../common/abis/vesting-abi";
import { SupportedChainId } from "../common/enumns";
import { IVestingSchedule } from "../common/interfaces";
import {
  getArbitrumProvider,
  getArbitrumRinkebyProvider,
} from "../common/web3/web3";
import { mapToVestingSchedule } from "./mappers";

const { REACT_APP_CONTRACT_ADDRESS, REACT_APP_DEFAULT_NETWORK_ID } =
  process.env;

const VESTING_INTERFACE = new Interface(vestingAbi);

export const getVestingContract = () => {
  return new ethers.Contract(
    REACT_APP_CONTRACT_ADDRESS!,
    vestingAbi,
    parseInt(REACT_APP_DEFAULT_NETWORK_ID!) === SupportedChainId.BSC_TESTNET
      ? getArbitrumProvider()
      : getArbitrumRinkebyProvider()
  );
};

export const vestingContract = getVestingContract();

export const getEncodedReleaseFunction = (
  vestingScheduleId: string,
  amount: string
): string => {
  return VESTING_INTERFACE.encodeFunctionData("release", [
    vestingScheduleId,
    amount,
  ]);
};

export const getVestingSchedulesClaimableAmounts = async (
  address: string
): Promise<IVestingSchedule[]> => {
  const vestings: IVestingSchedule[] = [];
  try {
    const vestingCount = await getVestingSchedulesCountByBeneficiary(address);
    for (let index = 0; index < vestingCount; index++) {
      const vestingScheduleId = await getVestingScheduleId(address, index);
      if (vestingScheduleId) {
        const amountReleasable = await getComputedReleasableAmount(
          vestingScheduleId
        );
        if (amountReleasable) {
          const result = await getVestingScheduleForHolderAndIndex(
            address,
            index
          );
          const vestingSchedule = mapToVestingSchedule(
            vestingScheduleId,
            result,
            amountReleasable.toString()
          );

          vestings.push(vestingSchedule!);
        }
      }
    }
  } catch (e) {
    console.log("Error getting all claimable amounts:", e);
  }
  return vestings;
};

const getComputedReleasableAmount = async (
  vestingScheduleId: string
): Promise<string | undefined> => {
  try {
    const amount = await vestingContract.computeReleasableAmount(
      vestingScheduleId
    );
    return amount.toString();
  } catch (e) {
    console.error("Error getting computed releasable amount:", e);
    return undefined;
  }
};

const getVestingSchedulesCountByBeneficiary = async (
  address: string
): Promise<number> => {
  let parsedCount = 0;
  try {
    const result = await vestingContract.getVestingSchedulesCountByBeneficiary(
      address
    );
    parsedCount = parseInt(result.toString());
  } catch (e) {
    console.error("Error getting vesting schedules count by beneficiary:", e);
  }
  return !isNaN(parsedCount) ? parsedCount : 0;
};

const getVestingScheduleForHolderAndIndex = async (
  holder: string,
  index: number
) => {
  try {
    const result = await vestingContract.getVestingScheduleByAddressAndIndex(
      holder,
      index
    );
    return result;
  } catch (e) {
    console.error("Error getting vesting schedules count by beneficiary:", e);
  }
  return undefined;
};

const getVestingScheduleId = async (
  holder: string,
  index: number
): Promise<string | undefined> => {
  try {
    return await vestingContract.computeVestingScheduleIdForAddressAndIndex(
      holder,
      index
    );
  } catch (e) {
    console.error("Error computing vesting schedule id:", e);
    return undefined;
  }
};
