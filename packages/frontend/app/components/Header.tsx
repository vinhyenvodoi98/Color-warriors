'use client'
import Link from 'next/link';

import Wallet from './Wallet';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-screen'>
      <div className='flex items-center justify-between'>
        <div className="navbar px-6">
          <div className="navbar-start">
          <Link href='/games'>
            <button className="btn text-white bg-black text-xl">Home</button>
          </Link>
          </div>
          <div className="navbar-end">
            <Wallet />
          </div>
        </div>
      </div>
    </header>
  );
}
