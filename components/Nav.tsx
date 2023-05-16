// Todo: Clean up svg and put in separate dir e.g public/images
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className='flex justify-between sm:hidden p-4 text-sm font-medium'>
        <Link href='/'>
          <svg
            width='40'
            height='25'
            viewBox='0 0 40 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.90735e-05 0H17.5V1.66667V4.16667V25H12.5V4.16667H1.90735e-05V0Z'
              fill='white'
              fillOpacity='0.8'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M40 0H22.5V1.66667V4.16667V25H27.5V4.16667H40V0Z'
              fill='white'
              fillOpacity='0.8'
            />
            <circle
              cx='33.3334'
              cy='13.3333'
              r='3.33334'
              fill='white'
              fillOpacity='0.8'
            />
          </svg>
        </Link>
        <button onClick={handleToggle}>
          {isOpen ? (
            <svg
              className='h-6 w-6 fill-white hover:fill-slate-400'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
              />
            </svg>
          ) : (
            <svg
              className='h-6 w-6 fill-white hover:fill-slate-400'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:justify-center  p-5 md:gap-x-12 sm:items-center`}
      >
        {children}
      </ul>
    </nav>
  );
}
