import { NotificationType } from "./commonTypes";
import { SupportedChainId } from "./enumns";

export const DEFAULT_NOTIFY_CONFIG: NotificationType = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: false,
  hideProgressBar: true,
};

export const arbitrumInfuraName = "arbitrum-mainnet";
export const arbitrumRinkebyInfuraName = "arbitrum-rinkeby";

export const NETWORK_EXPLORER_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.ARBITRUM]: `https://arbiscan.io/`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://testnet.arbiscan.io/`,
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];
