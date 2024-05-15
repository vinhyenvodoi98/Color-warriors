import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { Chain, configureChains, createConfig } from "wagmi";
import { zkSync, zkSyncSepoliaTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const chains: Chain[] = [
  zkSync,
  zkSyncSepoliaTestnet
]

export const defaultChain = process.env.NODE_ENV === "development" ? zkSyncSepoliaTestnet : zkSync;

const { publicClient } = configureChains(
  chains,
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Color warriors',
  chains,
  projectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains };
