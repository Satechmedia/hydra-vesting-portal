import { useWeb3 } from "@chainsafe/web3-context";
import { parseUnits } from "ethers/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  DEFAULT_NOTIFY_CONFIG,
  NETWORK_EXPLORER_URLS,
} from "../../common/constants";
import { SupportedChainId } from "../../common/enumns";
import { IVestingSchedule } from "../../common/interfaces";
import {
  getEncodedReleaseFunction,
  getVestingSchedulesClaimableAmounts,
} from "../../helpers/vestingContractHelper";
import CustomToastWithLink from "./TransactionLink";
const { REACT_APP_DEFAULT_NETWORK_ID, REACT_APP_CONTRACT_ADDRESS } =
  process.env;

export default function useHome() {
  const [vestingSchedules, setVestingSchedules] = useState<IVestingSchedule[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { network, address, provider } = useWeb3();
  const isWrongNetwork = network !== parseInt(REACT_APP_DEFAULT_NETWORK_ID!);

  const fetchVestingSchedulesCallback = useCallback(() => {
    async function fetch() {
      setIsLoading(true);
      try {
        const result = await getVestingSchedulesClaimableAmounts(address!);
        setVestingSchedules(result);
      } catch (e) {
        console.log("Error getting vesting schedules", e);
      } finally {
        setIsLoading(false);
      }
    }
    if (address) {
      fetch();
    }
  }, [address]);

  useEffect(() => {
    fetchVestingSchedulesCallback();
  }, [fetchVestingSchedulesCallback]);

  const onClaim = async (vestingScheduleId: string, amount: string) => {
    setIsLoading(true);
    try {
      const data = getEncodedReleaseFunction(
        vestingScheduleId,
        parseUnits(amount, 18).toString()
      );
      const singer = provider?.getUncheckedSigner();
      const tx = await singer!.sendTransaction({
        data,
        to: REACT_APP_CONTRACT_ADDRESS!,
        from: address!,
      });

      let transUrl =
        network === SupportedChainId.BSC
          ? `${NETWORK_EXPLORER_URLS[SupportedChainId.BSC]}/tx/${tx.hash}`
          : `${NETWORK_EXPLORER_URLS[SupportedChainId.BSC_TESTNET]}/tx/${
              tx.hash
            }`;
      toast.success(
        <CustomToastWithLink
          href={transUrl}
          text={
            tx.hash.substring(0, 4) +
            "..." +
            tx.hash.substring(tx.hash.length - 4, tx.hash.length)
          }
        />,
        {
          ...DEFAULT_NOTIFY_CONFIG,
          autoClose: false,
        }
      );
      const result = await getVestingSchedulesClaimableAmounts(address!);
      setVestingSchedules(result);
    } catch (e) {
      console.error("Error claiming tokens", e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    vestingSchedules,
    isLoading,
    isWrongNetwork,
    onClaim,
  };
}
