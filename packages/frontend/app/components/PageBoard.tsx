'use client'
import Board from './Board';
import { useMemo, useRef, useState, useEffect } from "react";
import Palette from './Palette';
import { useReadContract, useAccount, useWriteContract } from 'wagmi';

import contractAddress from '../../../smart-contract/contract-address.json'
import contractAbi from '../../../smart-contract/artifacts-zk/contracts/BoardGame.sol/BoardGame.json'
import { colorOptions } from '../config/color';
import Wallet from './Wallet';

export default function PageBoard({gameId}: {gameId:number}) {
  const [selectedColor, setSelectedColor]=useState<string>(colorOptions.red)
  const { writeContract } = useWriteContract()
  const canvasRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const { address } = useAccount()
  const { data: grid, refetch } = useReadContract({
    address: contractAddress["300"].address as `0x${string}`,
    abi: contractAbi.abi as any,
    functionName: 'getBoard',
    args: [gameId],
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

  const gridColors:any = useMemo(() => {
    return grid ?
      // @ts-ignore
      grid.map((obj:any) => obj?.map((value:string) => value === "" ? "white" : value))
      : Array.from({ length: 10 }, () => new Array(10).fill('white'));
  }, [grid]);

  return (
    <div
        className='relative bg-base-100 h-[600px] flex flex-col gap-4 justify-center items-center'
      >
        {gridColors && (
          <Board
            ref={canvasRef}
            gridColors={gridColors}
            setCoordinates={setCoordinates}
          />
        )}
        {
          address ? <Palette
          colorOptions={colorOptions}
          coordinates={coordinates}
          setSelectedColor={setSelectedColor}
          placePixel={() => writeContract({
              address: contractAddress["300"].address as `0x${string}`,
              abi: contractAbi.abi,
              functionName: 'place',
              args: [gameId,{
                x: coordinates.x, //x
                y: coordinates.y, //y
                color: selectedColor  //color
              }] as any,
            }
          )}
          selectedColor={selectedColor}
        /> :
        <div>
          <Wallet/>
        </div>
        }
      </div>
  )
}
