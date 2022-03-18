import { localStorageHelper, LocalStorageKeys } from "./localStorageHelper";

export const walletHelper = {
  getLocalWallets: () => {
    return localStorageHelper.get(LocalStorageKeys.wallets) || [];
  },
  setLocalWallets: (wallets: string[]) => {
    return localStorageHelper.set(LocalStorageKeys.wallets, wallets);
  },
};

export const formatWalletAddress = (isWrongNetwork: boolean, address: string) =>
  !isWrongNetwork
    ? address.substring(0, 6) + "..." + address.substring(38, 42)
    : "Wrong network";
