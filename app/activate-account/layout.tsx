import Footer from '../ui/Footer';
import Header from '../ui/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col bg-white justify-between h-screen'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
