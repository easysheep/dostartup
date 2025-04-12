"use client";

import React from 'react';
import Logo from "@/assets/Logo.png";
import Image from 'next/image';
import Link from "next/link";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-slate-800 text-white backdrop-blur-lg shadow-sm">
      <div className="flex items-center justify-between p-6">
        <div className='flex gap-2 items-center'>
          <Link
            href="/"
            className="text-xl font-bold transition-colors hover:text-[#82d157] flex items-center gap-2"
          >
            <Image
              src={Logo}
              width={55}
              height={55}
              alt="Logo"
            />
            <span className='text-xl font-semibold'>DoStartup</span>
          </Link>
        </div>

        <div>

        </div>
    </div>
        
    </header>
  );
};

export default Header;
