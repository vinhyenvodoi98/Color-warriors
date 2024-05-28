'use client'
import { useWriteContract, useReadContract, useBlockNumber, useChainId } from 'wagmi';

import contractAbi from '../../../smart-contract/artifacts-zk/contracts/BoardGame.sol/BoardGame.json'
import { useEffect } from 'react';
import Link from 'next/link';
import { getContractAddress } from '../utils/getContract';


export default function GamesPage() {
  const { writeContract } = useWriteContract()
  const chainId = useChainId()

  const { data: gameId, refetch } = useReadContract({
    address: getContractAddress(chainId) as `0x${string}`,
    abi: contractAbi.abi as any,
    functionName: 'gameId',
    args: [],
  });

  useEffect(() => {
    // Call fetchData immediately when the component renders
    refetch?.()

    // Set up an interval to call fetchData every 10 seconds
    const interval = setInterval(() => {
      refetch?.()
    }, 10000); // 10000 milliseconds = 10 seconds

    // Cleanup khi component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  return(
    <div className="grid place-items-center min-h-main">
      <div className="w-[800px] flex flex-col gap-8 border rounded-lg p-4">
        <div className='flex flex-col gap-4'>
          <p className="text-3xl">List of games</p>
          <div className="grid grid-cols-3">
            { Number(gameId) === 0 ?
            <div className='border rounded-full p-2'>
              <p className='font-bold text-neutral-content'>There is no game going on</p>
            </div>
            :
            <Room currentGameId={Number(gameId)} chainId={chainId}/>
            }
          </div>
        </div>
        <div className="">
          <button onClick={() => writeContract({
              address: getContractAddress(chainId) as `0x${string}`,
              abi: contractAbi.abi,
              functionName: 'newGame',
            }
          )}
            className="btn btn-primary text-2xl">
            Create new game 🕹️
          </button>
        </div>
      </div>
    </div>
  )
}

const Room = ({currentGameId, chainId}:any) => {
  const currentBlock = useBlockNumber()
  const { data: startTime, refetch } = useReadContract({
    address: getContractAddress(chainId) as `0x${string}`,
    abi: contractAbi.abi as any,
    functionName: 'startTime',
    args: [currentGameId - 1],
  });

  return (
    <div className='border rounded-full p-2'>
      {startTime && Number(currentBlock.data) < Number(startTime) + 420 ?
      <Link href={`/game/${currentGameId - 1}`}>
        <button className='btn btn-success w-full border rounded-full'>Game Id: {currentGameId - 1}</button>
      </Link>
      :
      <button disabled className='btn btn-success w-full border rounded-full'>Game Id: {currentGameId - 1}</button>}
    </div>
  )
}