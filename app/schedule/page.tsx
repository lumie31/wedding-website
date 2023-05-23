'use client';

import Header from '@/components/Header';
import ScheduleComponent from '@/components/Schedule';
import Footer from '@/components/Footer';

export default function Schedule() {
  return (
    <div>
      <Header backgroundImg='bg-schedule'>
        <h1 className='text-center'>Schedule</h1>
      </Header>
      <ScheduleComponent />
      <Footer />
    </div>
  );
}
