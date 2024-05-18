'use client';
import { zkSync, zkSyncSepoliaTestnet } from 'wagmi/chains'
import { http, createStorage, cookieStorage } from 'wagmi';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
const chains: Chain[] = [
  zkSync,
  zkSyncSepoliaTestnet
]

const projectId = "";

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
  chains: chains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
transports: chains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
});

// export const defaultChain = process.env.NODE_ENV === "development" ? zkSyncSepoliaTestnet : zkSync;

// const { publicClient } = configureChains(
//   chains,
//   [
//     publicProvider()
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'Color warriors',
//   chains,
//   projectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
// });

// export const wagmiConfig = createConfig({
//   autoConnect: true,
//   ssr: true,
//   connectors,
//   publicClient,
// });

// export { chains };
