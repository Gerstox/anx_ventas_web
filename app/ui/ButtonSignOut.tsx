'use client';

import { signOut } from 'next-auth/react';

export default function ButtonSignOut() {
  return (
    <button className="flex h-[48px] grow items-center text-gray-500 font-bold justify-center gap-2 rounded-md  p-3 text-sm hover:text-white hover:bg-gray-500 md:hover:bg-gray-500  md:hover:text-white md:flex-none md:justify-start md:p-2 md:px-3" onClick={() => signOut({ callbackUrl: '/', redirect:true })}>Salir</button>
  );
}
