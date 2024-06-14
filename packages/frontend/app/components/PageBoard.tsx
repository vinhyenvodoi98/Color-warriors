'use client'
import Board from './Board';
import { useMemo, useRef, useState, useEffect } from "react";
import Palette from './Palette';
import { useReadContract, useAccount, useWriteContract, useChainId } from 'wagmi';

import { colorOptions } from '../config/color';
import Wallet from './Wallet';
import { getContractAbi, getContractAddress } from '../utils/getContract';

export default function PageBoard({isEndGame ,gameId}: {isEndGame:boolean, gameId:number}) {
  const chainId = useChainId()
  const [selectedColor, setSelectedColor]=useState<string>(colorOptions.red)
  const { writeContract } = useWriteContract()
  const canvasRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { address } = useAccount()
  const { data: grid, refetch } = useReadContract({
    address: getContractAddress(chainId) as `0x${string}`,
    abi: getContractAbi() as any,
    functionName: 'getBoard',
    args: [gameId],
  });

  const { data: canPlace, refetch: refetchCanPlace } = useReadContract({
    address: getContractAddress(chainId) as `0x${string}`,
    abi: getContractAbi() as any,
    functionName: 'canPlace',
    args: [gameId],
    account: address,
  });

  useEffect(() => {
    // Call fetchData immediately when the component renders
    refetch?.()
    refetchCanPlace?.()

    // Set up an interval to call fetchData every 10 seconds
    const interval = setInterval(() => {
      refetch?.()
      refetchCanPlace?.()
    }, 10000); // 10000 milliseconds = 10 seconds

    // Cleanup khi component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  const gridColors:any = useMemo(() => {
    return grid ?
      // @ts-ignore
      grid.map((obj:any) => obj?.map((value:string) => value === "" ? "white" : value))
      : Array.from({ length: 10 }, () => new Array(10).fill('white'));
  }, [grid]);

  return (
    <div className='relative bg-base-100 h-[500px] flex flex-col gap-4 justify-center items-center'>
      {gridColors && (
        <Board
          ref={canvasRef}
          gridColors={gridColors}
          setCoordinates={setCoordinates}
        />
      )}
        {
          address ?
            !isEndGame ?
              <Palette
                colorOptions={colorOptions}
                coordinates={coordinates}
                canPlace={canPlace as boolean}
                setSelectedColor={setSelectedColor}
                placePixel={() => writeContract({
                    address: getContractAddress(chainId) as `0x${string}`,
                    abi: getContractAbi(),
                    functionName: 'place',
                    args: [gameId,{
                      x: coordinates.x, //x
                      y: coordinates.y, //y
                      color: selectedColor  //color
                    }] as any,
                  }
                )}
                changeColor={() => writeContract({
                    address: getContractAddress(chainId) as `0x${string}`,
                    abi: getContractAbi(),
                    functionName: 'changeColor',
                    args: [gameId, selectedColor] as any,
                  }
                )}
                selectedColor={selectedColor}
              /> :
            <p>Game is Over</p>
          :
        <div>
          <Wallet/>
        </div>
        }
      </div>
  )
}
