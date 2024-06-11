import { CiBoxes } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";

export const menu_mobile = [
  {
    name: 'Compras',
    href: '/dashboard/buy',
    icon: RiShoppingCart2Line,
  },
  {
    name: 'Productos',
    href: '/dashboard/products',
    icon: CiBoxes,
  },
  {
    name: 'Home',
    href: '/dashboard',
    icon: MdHome,
  },
  {
    name: 'Clientes',
    href: '/dashboard/clients',
    icon: IoPeople,
  },
  {
    name: 'Ventas',
    href: '/dashboard/sell',
    icon: FaMoneyBill,
  },
];
