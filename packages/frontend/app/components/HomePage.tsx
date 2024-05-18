'use client'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useAccount } from 'wagmi';

export default function HomePage() {
  const {address, chainId} = useAccount()
  return(
    <div className="bg-cover bg-center min-h-main bg-[url('/images/background.webp')]">
      <div className="grid grid-rows-2 place-items-center min-h-main">
        <div className="">
          <p className="text-9xl font-bold text-white">Color Warrior</p>
        </div>
        <div className="">
          {
            address ?
            <Link href='/games'>
              <button className="btn btn-neutral w-[200px] text-2xl">Play 🎮</button>
            </Link>
            :
            <ConnectButton/>
          }
        </div>
      </div>
    </div>
  )
}