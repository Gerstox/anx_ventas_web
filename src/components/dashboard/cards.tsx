// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
import { IoCashOutline } from 'react-icons/io5';
import { GoClock, GoInbox } from 'react-icons/go';
import { PiUsersThree } from 'react-icons/pi';
// import { lusitana } from '@/components/assets/fonts';
// import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: IoCashOutline,
  customers: PiUsersThree,
  pending: GoClock,
  invoices: GoInbox,
};

export default async function CardWrapper() {
  //   const {
  //     totalPaidInvoices,
  //     totalPendingInvoices,
  //     numberOfInvoices,
  //     numberOfCustomers,
  //   } = await fetchCardData();
  return (
    <>
      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
      <Card title="Vendido" value={0} type="collected" />
      <Card title="Por cobrar" value={0} type="pending" />
      <Card title="Total de ventas" value={0} type="invoices" />
      <Card title="Total clientes" value={0} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-lg">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-blue-700" /> : null}
        <h3 className="ml-2 text-sm text-blue-700 font-semibold">{title}</h3>
      </div>
      <p
        className={`
            truncate rounded-xl bg-white px-4 py-4 text-center text-3xl text-blue-700 `}
      >
        {value}
      </p>
    </div>
  );
}
