import Header from '@/components/Header';
import React from 'react';

export default function Schedule({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header backgroundImg='bg-schedule'>
        <h1 className='text-center'>Schedule</h1>
      </Header>
      <p className='text-black'>Schedule content goes here</p>
    </div>
  );
}
