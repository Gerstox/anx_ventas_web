import Link from 'next/link';
import { CiBoxes } from 'react-icons/ci';
import { FaMoneyBill } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';
import { RiShoppingCart2Line } from 'react-icons/ri';

export default function FooterMenu() {
  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-900 to-blue-700 text-blue-50">
      <Link className="hover:bg-blue-700 flex-1" href="#">
        <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
          <RiShoppingCart2Line className="text-2xl" />
          Compras
        </div>
      </Link>
      <Link className="hover:bg-blue-700 flex-1" href="#">
        <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
          <CiBoxes className="text-2xl" />
          Productos
        </div>
      </Link>
      <Link className="hover:bg-blue-700 flex-1" href="#">
        <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
          <MdHome className="text-2xl" />
          Home
        </div>
      </Link>
      <Link className="hover:bg-blue-700 flex-1" href="#">
        <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
          <IoPeople className="text-2xl" />
          Clientes
        </div>
      </Link>
      <Link className="hover:bg-blue-700 flex-1" href="#">
        <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
          <FaMoneyBill className="text-2xl" />
          Ventas
        </div>
      </Link>
    </div>
  );
}
