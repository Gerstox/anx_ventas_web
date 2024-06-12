import HeaderDashboard from '@/components/dashboard/HeaderDashboard';
import FooterMenu from '@/components/dashboard/FooterMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col bg-white justify-between'>
      <HeaderDashboard></HeaderDashboard>
      {children}
      <FooterMenu></FooterMenu>
    </main>
  );
}
