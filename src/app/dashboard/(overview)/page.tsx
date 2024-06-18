import ButtonSignOut from '@/components/ButtonSignOut';
import { CardsSkeleton } from '@/components/Skeletons';
import CardWrapper from '@/components/dashboard/cards';
import { Suspense } from 'react';
export default async function Page() {
  return (
    <div className="bg-white px-4 py-[80px] md:py-8 w-full md:w-[425px] m-auto md:my-4 md:border md:rounded-md md:shadow-xl">
      {/* <h1 className="text-center text-2xl font-bold text-orange-600 mb-2">
        Tablero
      </h1> */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Suspense fallback={<CardsSkeleton />}> */}
          <CardWrapper />
        {/* </Suspense> */}
      </div>
      <ButtonSignOut />
    </div>
  );
}
