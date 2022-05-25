import { NotificationType } from "./commonTypes";
import { SupportedChainId } from "./enumns";

export const DEFAULT_NOTIFY_CONFIG: NotificationType = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: false,
  hideProgressBar: true,
};

export const arbitrumInfuraName = "bsc-mainnet";
export const arbitrumRinkebyInfuraName = "bsc-testnet";

export const NETWORK_EXPLORER_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.BSC]: `https://bscscan.com/`,
  [SupportedChainId.BSC_TESTNET]: `https://testnet.bscscan.com/`,
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];
