import { lusitana } from "@/components/assets/fonts";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { IoAddCircle } from "react-icons/io5";

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
    <div className="w-full h-full p-4 relative">
      <div className="flex w-full items-center justify-center">
        {/* <h1 className='text-2xl font-bold'>Clientes</h1> */}
      </div>
      <div className="mt-1 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar clientes..." />
        {/* <CreateInvoice /> */}
      </div>
       {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      {/* <div className="absolute bottom-4 left-2/4 -translate-x-1/2 mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
      <IoAddCircle className="absolute bottom-0 right-0 text-blue-900 hover:text-blue-700 text-7xl" />
    </div>
  );
}
