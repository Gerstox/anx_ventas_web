import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col bg-white justify-between h-screen'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
