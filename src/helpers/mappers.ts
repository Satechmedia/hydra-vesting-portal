import { IVestingSchedule } from "../common/interfaces";
import { formatVestingAmount, parseToMiliseconds } from "./numberHelper";

export const mapToVestingSchedule = (
  vestingScheduleId: string,
  vestingSchedule: any,
  amountReleasable: string
): IVestingSchedule | undefined => {
  try {
    const start = parseToMiliseconds(vestingSchedule["start"]);
    const duration = parseToMiliseconds(vestingSchedule["duration"]);

    return {
      vestingScheduleId: vestingScheduleId,
      start: new Date(start),
      end: new Date(start + duration),
      cliff: Number(vestingSchedule["cliff"]),
      amountTotal: formatVestingAmount(
        vestingSchedule["amountTotal"].toString()
      ),

      amountClaimed: formatVestingAmount(
        vestingSchedule["released"].toString()
      ),

      amountReleasable: formatVestingAmount(amountReleasable.toString()),
      revoked: vestingSchedule["revoked"],
    };
  } catch (e) {
    console.error("Error during mapping to vesting schedule", e);
    return undefined;
  }
};
