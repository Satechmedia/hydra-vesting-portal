export interface IVestingSchedule {
  vestingScheduleId: string;
  start: Date;
  end: Date;
  cliff: number;
  amountTotal: string;
  amountClaimed: string;
  amountReleasable: string;
  revoked: boolean;
}
