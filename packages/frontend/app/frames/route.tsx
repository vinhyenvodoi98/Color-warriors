/* eslint-disable react/jsx-key */
import { Button, createFrames } from "frames.js/next";
import FrameBoard from "../components/FrameBoard";
import { zkSyncSepoliaTestnet } from "viem/chains";
import contractAbi from '../../../smart-contract/artifacts-zk/contracts/BoardGame.sol/BoardGame.json'
import {
  createPublicClient,
  http,
} from "viem";
import { getContractAddress } from "../utils/getContract";

const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (ctx:any) => {
  const publicClient = createPublicClient({
    chain: zkSyncSepoliaTestnet,
    transport: http(),
  });
  const board = await publicClient.readContract({
    address: getContractAddress(300) as `0x${string}`,
    abi: contractAbi.abi,
    functionName: 'getBoard',
    args: [ctx.searchParams.id]
  })  as string[][];

  return {
    version: "vNext",
    image: (
      <div tw="w-full h-full bg-slate-200 text-white justify-center items-center flex flex-col">
        <p tw="text-slate-900 text-center">Please enter [0-9] [0-9] into the input and select the color</p>
        <p tw="text-slate-900 text-center">The game will last 7 minutes. the fewest number of colors wins</p>
        <FrameBoard board={board}/>
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target={`/txdata?id=${ctx.searchParams.id}`}>🟥</Button>,
      <Button action="tx" target={`/txdata?id=${ctx.searchParams.id}`}>🟦</Button>,
      <Button action="tx" target={`/txdata?id=${ctx.searchParams.id}`}>🟨</Button>,
      <Button action="post">Refresh</Button>
    ],
    textInput: "Put Coordinates example : 5-5",
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
