'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemProp = {
  href: string;
  children: React.ReactNode;
  special?: string;
};

export default function NavItem({ href, special, children }: NavItemProp) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className='py-2 text-center'>
      <Link
        href={href}
        className={`text-white mx-4 py-1 hover:text-slate-400 ${
          isActive ? 'border-b-2' : ''
        } ${
          special === 'gift'
            ? 'bg-white rounded-full !text-[#0047A6] hover:!text-green-500 px-2 py-2'
            : ''
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
