import Footer from '../components/Footer';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex flex-col bg-white justify- h-screen relative">

      
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
        <h3 className="text-sm text-center text-gray-500">
          ¡Con nuestro sistema de gestión de ventas, siempre estás un paso
          adelante!
        </h3>
      </div>
  <div className='absolute bottom-0 w-full'>

      <Footer></Footer>
  </div>
    </main>
  );
}
