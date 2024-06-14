'use client'
import { Framework } from "@superfluid-finance/sdk-core";
import { useEffect, useMemo, useState } from "react"
import { useAccount, useWalletClient } from "wagmi";
import { providers } from 'ethers';
import { WalletClient, formatEther } from "viem";
import { superTokenAddress } from "../utils/constant";

export default function Main({sender, receiver}:{sender: `0x${string}`,receiver: `0x${string}`}) {
  const [flowData, setFlowData] = useState<any>()
  const {chain: accountChain} = useAccount()
  const { data: walletClient } = useWalletClient({ chainId: accountChain?.id });

  useEffect(() => {
    const getFlow = async () => {
      const { chain, transport } = walletClient as WalletClient;
      if(chain) {
        const network = {
          chainId: chain?.id,
          name: chain?.name,
        };

        const provider = new providers.Web3Provider(transport, network as any);

        const sf = await Framework.create({
          chainId: chain?.id,
          provider: provider
        });

        const daix = await sf.loadSuperToken(
          superTokenAddress
        );

        let res = await daix.getFlow({
          sender: sender,
          receiver: receiver,
          providerOrSigner: provider
        });
        setFlowData(res)
      }
    }

    if(walletClient) getFlow()
  }, [sender, receiver, walletClient])

  return(
    <div className="h-[80px] p-4 text-lg">
      <div className="flex font-bold justify-start gap-4">
        Reward:
        <div className="m-auto w-[135px]">
          {
            flowData && <FlowingBalance startingBalance={BigInt(flowData.deposit)} startingBalanceDate={flowData.timestamp} flowRate={BigInt(flowData.flowRate)}/>
          }
        </div>
      </div>
    </div>
  )
}

// Constants
export const ANIMATION_MINIMUM_STEP_TIME = 40;

// Utility functions
export const absoluteValue = (n: bigint) => {
  return n >= BigInt(0) ? n : -n;
};

export function toFixedUsingString(numStr: string, decimalPlaces: number): string {
  const [wholePart, decimalPart] = numStr.split('.');

  if (!decimalPart || decimalPart.length <= decimalPlaces) {
    // @ts-ignore
    return numStr.padEnd(wholePart.length + 1 + decimalPlaces, '0');
  }

  // @ts-ignore
  const decimalPartBigInt = BigInt(`${decimalPart.slice(0, decimalPlaces)}${decimalPart[decimalPlaces] >= '5' ? '1' : '0'}`);

  return `${wholePart}.${decimalPartBigInt.toString().padStart(decimalPlaces, '0')}`;
}

// Hooks
export const useSignificantFlowingDecimal = (
  flowRate: bigint,
  animationStepTimeInMs: number,
): number | undefined => useMemo(() => {
  if (flowRate === BigInt(0)) {
    return undefined;
  }

  const ticksPerSecond = 1000 / animationStepTimeInMs;
  const flowRatePerTick = flowRate / BigInt(ticksPerSecond);

  const [beforeEtherDecimal, afterEtherDecimal] = formatEther(flowRatePerTick).split('.');

  const isFlowingInWholeNumbers = absoluteValue(BigInt(beforeEtherDecimal as string)) > BigInt(0);

  if (isFlowingInWholeNumbers) {
    return 0; // Flowing in whole numbers per tick.
  }
  const numberAfterDecimalWithoutLeadingZeroes = BigInt(afterEtherDecimal as string);

  const lengthToFirstSignificantDecimal = (afterEtherDecimal as string)
    .toString()
    .replace(numberAfterDecimalWithoutLeadingZeroes.toString(), '').length; // We're basically counting the zeroes.

  return Math.min(lengthToFirstSignificantDecimal + 2, 18); // Don't go over 18.
}, [flowRate, animationStepTimeInMs]);

const useFlowingBalance = (
  startingBalance: bigint,
  startingBalanceDate: Date,
  flowRate: bigint
) => {
  const [flowingBalance, setFlowingBalance] = useState(startingBalance);

  const startingBalanceTime = startingBalanceDate.getTime();
  useEffect(() => {
    if (flowRate === BigInt(0)) return;

    let lastAnimationTimestamp = 0;

    const animationStep = (currentAnimationTimestamp: number) => {
      const animationFrameId = window.requestAnimationFrame(animationStep);
      if (
        currentAnimationTimestamp - lastAnimationTimestamp >
        ANIMATION_MINIMUM_STEP_TIME
      ) {
        const elapsedTimeInMilliseconds = BigInt(
          Date.now() - startingBalanceTime
        );
        const flowingBalance_ =
          startingBalance + (flowRate * elapsedTimeInMilliseconds) / BigInt(1000);

        setFlowingBalance(flowingBalance_);

        lastAnimationTimestamp = currentAnimationTimestamp;
      }

      return () => window.cancelAnimationFrame(animationFrameId);
    };

    let animationFrameId = window.requestAnimationFrame(animationStep);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [startingBalance, startingBalanceTime, flowRate]);

  return flowingBalance;
};

// FlowingBalance Component
const FlowingBalance: React.FC<{
  startingBalance: bigint;
  startingBalanceDate: Date;
  flowRate: bigint;
}> = (({ startingBalance, startingBalanceDate, flowRate }) => {
  const flowingBalance = useFlowingBalance(
    startingBalance,
    startingBalanceDate,
    flowRate
  );

  const decimalPlaces = useSignificantFlowingDecimal(
    flowRate,
    ANIMATION_MINIMUM_STEP_TIME
  );

  return (
    <div className="flowing-balance">
    {decimalPlaces !== undefined
      ? toFixedUsingString(formatEther(flowingBalance), decimalPlaces)
      : formatEther(flowingBalance)}
  </div>
  );
});