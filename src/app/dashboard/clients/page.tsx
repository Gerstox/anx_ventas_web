import { lusitana } from '@/components/assets/fonts';
import ClientList from '@/components/dashboard/clients/ClientList';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { IoAddCircle } from 'react-icons/io5';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = 1; //await fetchInvoicesPages(query);
  return (
    <div className="w-full h-full p-4  py-[80px]">
      <div className="flex w-full items-center justify-center">
        {/* <h1 className='text-2xl font-bold'>Clientes</h1> */}
      </div>
      <div className="w-full px-4 py-2 bg-white flex items-center justify-between gap-2 md:mt-8 fixed top-[70px]  left-1/2 transform -translate-x-1/2">
        <Search placeholder="Buscar clientes..." />
        <IoAddCircle className=" text-blue-700 hover:text-blue-900 text-5xl" />

        {/* <CreateInvoice /> */}
      </div>
      <ClientList></ClientList>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      {/* <div className="absolute bottom-4 left-2/4 -translate-x-1/2 mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
      {/* <IoAddCircle className="fixed bottom-14 right-0 text-blue-900 hover:text-blue-700 text-5xl z-10" /> */}
    </div>
  );
}
