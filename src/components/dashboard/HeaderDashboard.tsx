import Link from 'next/link';
import { FaBell, FaEllipsisV } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';

export default function HeaderDashboard() {
  return (
    <div className="fixed top-0 w-full z-10 flex justify-between px-2 items-center bg-gradient-to-r from-blue-900 to-blue-700">
      <Link className="" href="/">
        <div className="text-3xl text-blue-50 text-center font-bold p-4">
          ANX
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <IoPersonCircleSharp className="text-white text-3xl" />
        <FaBell className="text-white text-2xl" />
        <FaEllipsisV className="text-white text-2xl" />
      </div>
    </div>
  );
}
