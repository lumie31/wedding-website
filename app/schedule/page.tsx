'use client';

import Header from '@/components/Header';
import ScheduleComponent from '@/components/Schedule';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Schedule() {
  return (
    <div>
      <Header backgroundImg='bg-schedule'>
        <h1 className='text-center'>Schedule</h1>
      </Header>
      <ScheduleComponent />
      <div className='flex justify-center sm:hidden'>
        <Link
          href='/gift-registry'
          className='font-sans rounded-full px-4 py-3 my-3 bg-[#0047A6] text-white w-[150px] text-center sm:mx-5 hover:text-slate-300'
        >
          Gift Us
        </Link>
      </div>
      <Footer />
    </div>
  );
}
