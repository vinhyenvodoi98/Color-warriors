'use client';
import { zkSyncSepoliaTestnet } from 'wagmi/chains'
import { http, createStorage, cookieStorage } from 'wagmi';
import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
const chains: Chain[] = [
  // zkSync,
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
