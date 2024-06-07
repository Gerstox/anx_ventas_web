'use client';
import { FaGoogle } from "react-icons/fa";

import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

export default function ButtonGoogle() {
  return (
    <button
      type="button"
      onClick={() => signIn('google', {callbackUrl: '/dashboard', redirect: true})}
      className="flex items-center justify-between w-full rounded-md bg-white hover:bg-gray-200 text-gray-700 px-6 py-3 text-md font-semibold border shadow-xl"
    >
      <FaGoogle />
      <span className="w-full">
      Google
      </span>
    </button>
  );
}
