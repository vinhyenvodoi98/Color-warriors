'use client'

import { useParams } from 'next/navigation'
import PageBoard from '../../components/PageBoard'
import { useEffect, useMemo } from 'react'
import { getContractAbi, getContractAddress } from '../../utils/getContract'
import { useBlockNumber, useChainId, useReadContract } from 'wagmi'
import CountDownBlock from '../../components/CountdownBlock'

export default function Game() {
  const params = useParams()
  const chainId = useChainId()
  const blockNumber = useBlockNumber({
    chainId: chainId,
    watch: true,
  })

  const { data: gameStartBlockNumber, refetch } = useReadContract({
    address: getContractAddress(chainId) as `0x${string}`,
    abi: getContractAbi(),
    functionName: 'startTime',
    args: [params.id ? params.id : 0],
  });

  useEffect(() => {
    // Call fetchData immediately when the component renders
    refetch?.()

    // Set up an interval to call fetchData every 10 seconds
    const interval = setInterval(() => {
      refetch?.()
    }, 5000); // 10000 milliseconds = 10 seconds

    // Cleanup khi component unmount
    return () => {
      if(params.id) clearInterval(interval);
    };
  }, [params.id])

  const isEndGame = useMemo(() => {
    return Number(blockNumber.data) >= (Number(gameStartBlockNumber) + 420) //+7 mins
  }, [gameStartBlockNumber, blockNumber])

  return(
    <div>
      <div className='h-[200px] flex flex-col justify-end items-center'>
        <div className='w-[800px]'>
          <CountDownBlock endBlock={Number(gameStartBlockNumber) + 420} currentBlock={Number(blockNumber.data)} />
        </div>
      </div>
      {params.id !== undefined &&
        <PageBoard isEndGame={isEndGame} gameId={Number(params.id)}/>
      }
    </div>
  )
}