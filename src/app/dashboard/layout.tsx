import HeaderDashboard from '@/components/dashboard/header-dashboard';
import FooterMenu from '@/components/dashboard/footer-menu';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex flex-col bg-white justify-between h-screen'>
      <HeaderDashboard></HeaderDashboard>
      {children}
      <FooterMenu></FooterMenu>
    </main>
  );
}
