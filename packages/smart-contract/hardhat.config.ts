import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@matterlabs/hardhat-zksync";
require('dotenv').config()

const { WALLET_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: "zkSyncSepoliaTestnet",
  networks: {
    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      verifyURL: "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
    // zkSyncMainnet: {
    //   url: "https://mainnet.era.zksync.io",
    //   ethNetwork: "mainnet",
    //   zksync: true,
    //   verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    // },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [WALLET_PRIVATE_KEY as string],
      chainId: 84532,
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [WALLET_PRIVATE_KEY as string],
      chainId: 11155111,
    },
    hardhat: {
      zksync: true,
    },
  },
  zksolc: {
    version: "latest",
    settings: {
      // find all available options in the official documentation
      // https://era.zksync.io/docs/tools/hardhat/hardhat-zksync-solc.html#configuration
    },
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
