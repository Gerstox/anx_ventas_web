import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col bg-white justify-between h-screen'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
