import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page() {
  return (
    <main className="p-4 py-[80px] relative">
      <div className="text-center relative">
        <Link href="/dashboard/clients" className='absolute top-0 left-0 w-full'>
          <FaArrowLeft className="text-2xl text-blue-900 " />
        </Link>
        <span className="text-blue-900 text-lg font-semibold">
          Crear cliente
        </span>
      </div>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Clientes', href: '/dashboard/clients' },
          {
            label: 'Crear cliente',
            href: '/dashboard/clients/create',
            active: true,
          },
        ]}
      /> */}
    </main>
  );
}
