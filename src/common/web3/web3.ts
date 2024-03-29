import { ethers } from "ethers";
import Web3 from "web3";
import { arbitrumInfuraName, arbitrumRinkebyInfuraName } from "../constants";

const { REACT_APP_DEFAULT_NETWORK_ID} = process.env;

export const getProviderUrl = (networkName: string) => {
  return `https://bsc-testnet.web3api.com/v1/NVFEZF1BHV9NDSBCIHCPNAA6GSP1XRYNDU`;
};

export const getWeb3Initialised = (networkName: string) =>
  new Web3(getProviderUrl(networkName));

export const getProvider = (chainId: number, networkName: string) => {
  return new ethers.providers.JsonRpcProvider(getProviderUrl(networkName), {
    chainId: chainId,
    name: networkName.toLowerCase(),
  });
};

export const getArbitrumRinkebyProvider = () => {
  return getProvider(
    parseInt(REACT_APP_DEFAULT_NETWORK_ID!),
    arbitrumRinkebyInfuraName
  );
};

export const getArbitrumProvider = () => {
  return getProvider(
    parseInt(REACT_APP_DEFAULT_NETWORK_ID!),
    arbitrumInfuraName
  );
};
