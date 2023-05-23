'use client';

import Header from '@/components/Header';
import Schedule from '@/components/Schedule';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import DateVenue from '@/components/DateVenue';
import OurStory from '@/components/OurStory';

export default function Home() {
  return (
    <>
      <Header backgroundImg='bg-home'>
        <div className='p-1'>
          <h1 className='text-center'>Fiyin and Tobi</h1>
          <h1 className='text-center'>
            are getting&nbsp;
            <span className='text-white'>married!</span>
          </h1>
        </div>
      </Header>
      <DateVenue />
      <OurStory />
      <Schedule />
      <Gallery withButtons withHeader />
      <Footer />
    </>
  );
}
