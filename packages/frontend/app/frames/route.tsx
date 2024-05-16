/* eslint-disable react/jsx-key */
import { Button, createFrames } from "frames.js/next";
import FrameBoard from "../components/FrameBoard";
import { zkSyncSepoliaTestnet } from "viem/chains";
import contractAddress from '../../../smart-contract/contract-address.json'
import contractAbi from '../../../smart-contract/artifacts-zk/contracts/Board.sol/Board.json'
import {
  createPublicClient,
  http,
} from "viem";

const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx:any) => {
  const publicClient = createPublicClient({
    chain: zkSyncSepoliaTestnet,
    transport: http(),
  });
  const board = await publicClient.readContract({
    address: contractAddress["300"].address as `0x${string}`,
    abi: contractAbi.abi,
    functionName: 'getBoard',
  })  as string[][];

  return {
    version: "vNext",
    image: (
      <div tw="w-full h-full bg-slate-200 text-white justify-center items-center flex flex-col">
        <p tw="text-slate-900 text-center">This is a 10x10 table</p>
        <p tw="text-slate-900 text-center">Please enter [0-10] [0-10] into the input and select the color</p>
        <FrameBoard board={board}/>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target="/txdata">🟥</Button>,
      <Button action="tx" target="/txdata">🟦</Button>,
      <Button action="tx" target="/txdata">🟨</Button>,
      <Button action="post">Refresh</Button>
    ],
    textInput: "Put Coordinates example : 15-15",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
