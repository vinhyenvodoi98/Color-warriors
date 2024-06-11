'use client';
import { useEffect, useState } from 'react';

interface CountdownBlockProps {
  endBlock: number;
  currentBlock: number;
}
export default function CountDownBlock({ endBlock, currentBlock }: CountdownBlockProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  function calculateTimeLeft() {
    const difference = endBlock - currentBlock;

    return {
      currentBlock: currentBlock ? currentBlock : 0,
      endBlock: endBlock ? endBlock : 0,
      remainBlock: difference ? ( difference < 0 ? 0 : difference ) : 0
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endBlock, currentBlock]);

  return (
    <div className='w-full grid grid-cols-3 place-items-center gap-5 text-center auto-cols-max'>
      <div className='flex flex-col'>
        <span className='font-mono text-5xl'>
          <span> {timeLeft.currentBlock}</span>
        </span>
        Current Block
      </div>
      <div className='flex flex-col'>
        <span className='font-mono text-5xl'>
          <span> {timeLeft.endBlock} </span>
        </span>
        End Block
      </div>
      <div className='flex flex-col'>
        <span className='font-mono text-5xl'>
          <span >{timeLeft.remainBlock}</span>
        </span>
        Remaining blocks
      </div>
    </div>
  );
}