'use client'

import { useParams } from 'next/navigation'
import PageBoard from '../../components/PageBoard'
import { useEffect, useMemo } from 'react'
import { getContractAbi, getContractAddress } from '../../utils/getContract'
import { useChainId, useReadContract } from 'wagmi'

export default function Game() {
  const params = useParams()
  const chainId = useChainId()

  const { data: gameStartTime, refetch } = useReadContract({
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
    const now = new Date()
    return Number(now.getTime()) >= Number(gameStartTime)*1000
  }, [gameStartTime])

  return(
    <div>
      {params.id !== undefined &&
        <PageBoard isEndGame={isEndGame} gameId={Number(params.id)}/>
      }
    </div>
  )
}