import { formatUnits } from "ethers/lib/utils";

export const parseToMiliseconds = (value: string): number => {
  return Number(value) * 1000;
};

export const formatVestingAmount = (value: string): string =>
  Number(formatUnits(value, "18")).toFixed(2);
