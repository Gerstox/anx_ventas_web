'use client';
import { menu_mobile } from '@/utils/links';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterMenu() {
  const links = menu_mobile;
  const pathname = usePathname();
  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-900 to-blue-700 text-blue-50 fixed bottom-0 w-full">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('hover:bg-blue-600 flex-1', {
              'bg-blue-600': pathname === link.href,
            })}
          >
            <div className="flex flex-col items-center gap-1 text-white text-center text-[10px] p-2">
              <LinkIcon className="text-2xl" />
              {link.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
