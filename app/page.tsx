import Image from 'next/image';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex flex-col bg-white justify- h-screen">

      
      <div className="py-4 px-8 text-center bg-gradient-to-r from-blue-900 to-blue-700 text-blue-50 text-3xl rounded-br-[125px] rounded-tl-[50px] relative">
        <div className='flex justify-center mb-6'>
          <Link className="w-fit border-2 border-blue-50 rounded-full text-blue-50 px-4 py-1 text-sm font-semibold mt-3" href="/login">
              Iniciar sesión
          </Link>
        </div>
        <h1 className="text-3xl font-bold">ANX</h1>
        <h2 className="text-sm mb-6">Maximiza tus ventas, optimiza tu éxito</h2>
        <Link
          className="flex gap-4 items-center w-fit rounded-full bg-orange-500 hover:bg-orange-600 hover:underline text-blue-50 px-4 py-2 text-sm font-semibold my-3 mx-auto"
          href="/register"
        >
          Registrate ahora!
          <MdKeyboardArrowRight className="bg-orange-900 rounded-full text-orange-500 text-2xl" />
        </Link>
      </div>
      <div className="px-10 py-4">
        <h3 className="text-sm text-center">
          ¡Con nuestro sistema de gestión de ventas, siempre estás un paso
          adelante!
        </h3>
      </div>
      {/* <div className="w-full h-full relative ">
        <div className="w-full h-52 md:h-full relative bg-blue-900">
          <div className="bg-gray-900 opacity-40 w-full h-full absolute z-10"></div>
          <Header></Header>
          <Image
            src={'/home-image.jpg'}
            fill
            objectFit="cover"
            alt="Home image"
            className="block md:hidden"
          />
          <Image
            src={'/home-image.jpg'}
            layout="fill"
            objectFit="contain"
            alt="Home image"
            className="hidden md:block"
          />
        </div>
  </div> */}
      <Footer></Footer>
    </main>
  );
}
