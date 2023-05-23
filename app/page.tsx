'use client';

import Image from 'next/image';
import lovers from '../public/images/lovers.png';
import couples from '../public/images/couples.png';
import Header from '@/components/Header';
import Link from 'next/link';
import Schedule from '@/components/Schedule';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <div>
      <Header backgroundImg='bg-home'>
        <div className='p-1'>
          <h1 className='text-center'>Fiyin and Tobi</h1>
          <h1 className='text-center'>
            are getting&nbsp;
            <span className='text-white'>married!</span>
          </h1>
        </div>
      </Header>
      <section className='h-100 text-[#001944] p-4 flex flex-col items-center sm:flex-row sm:justify-between font-serif'>
        <Image
          src={lovers}
          width={320}
          height={320}
          alt='love'
          className='sm:order-2'
        />
        <h2 className='sm:order-1 sm:w-1/3 sm:self-start sm:mt-5'>
          June 23 & 24, 2023
        </h2>
        <h2 className='sm:order-3 sm:text-right sm:w-1/3 sm:self-end sm:mb-5'>
          Ibadan, NG
        </h2>
      </section>
      <div className=' bg-[#052862] flex flex-col p-5 items-center sm:flex sm:relative text-white'>
        {/* <p className='text-5xl underline underline-offset-8 sm:no-underline my-4 sm:px-4 sm:border-l-4 sm:self-start font-serif'>
          Our Story
        </p>
        <div className='py-6 sm:self-end'>
          <Image src={couples} width={300} height={300} alt='lovely couple' />
        </div>
        <p className='text-sm text-justify text-ellipsis font-sans text-[#D0E0FA] sm:self-start sm:w-2/3 font-thin'>
          Ten years ago, we met through a mutual friend. It was an online
          encounter that started our journey together. We lived in different
          parts of Nigeria, and our first physical meeting didn&#39;t happen
          until five years later. But even without meeting in person, we felt a
          strong connection and stayed in touch through social media and
          messaging apps. As the years went by, we watched each other grow and
          develop into amazing individuals. Our friendship grew stronger, and we
          felt a sense of comfort in each other&#39;s company. We shared stories
          about our lives, our struggles, and our aspirations. We realized that
          we had a lot in common and shared many of the same values.
        </p>
        <Link href='/our-story' className='font-sans self-start py-4'>
          Read full story here &gt;
        </Link> */}
        <h1 className='order-1 underline underline-offset-8 sm:no-underline my-4 sm:px-4 sm:border-l-8 sm:self-start font-serif'>
          Our Story
        </h1>
        <p className='text-justify text-ellipsis font-sans py-3 text-[#D0E0FA] font-thin order-3 sm:order-2 sm:w-1/2 sm:text-left leading-loose sm:self-start md:w-3/5'>
          Ten years ago, we met through a mutual friend. It was an online
          encounter that started our journey together. We lived in different
          parts of Nigeria, and our first physical meeting didn&#39;t happen
          until five years later. But even without meeting in person, we felt a
          strong connection and stayed in touch through social media and
          messaging apps. As the years went by, we watched each other grow and
          develop into amazing individuals. Our friendship grew stronger, and we
          felt a sense of comfort in each other&#39;s company. We shared stories
          about our lives, our struggles, and our aspirations. We realized that
          we had a lot in common and shared many of the same values.
        </p>
        <Link
          href='/our-story'
          className='font-sans self-start py-4 order-4 sm:order-3'
        >
          Read full story here &gt;
        </Link>

        <div className='py-6 order-2 sm:self-end sm:absolute sm:inset-y-12'>
          <Image src={couples} width={300} height={300} alt='lovely couple' />
        </div>
      </div>
      <Schedule />
      <Gallery withButtons withHeader />
      <Footer />
    </div>
  );
}
