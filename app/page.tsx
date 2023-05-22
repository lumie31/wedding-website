'use client';

import Image from 'next/image';
import lovers from '../public/images/lovers.png';
import couples from '../public/images/couples.png';
import gallery from '../public/images/gallery.png';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
        <h2 className='sm:order-1 sm:w-1/3'>June 23 & 24, 2023</h2>
        <h2 className='sm:order-3 sm:text-right sm:w-1/3'>Ibadan, NG</h2>
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
      <section className='h-[450px] flex justify-center items-center text-white'>
        <div className='flex flex-col justify-around h-80 w-full rounded-lg bg-[#052862] py-3 px-7 my-5 mx-5 text-center font-sans sm:w-[470px]'>
          <h2 className='font-serif'>Schedule</h2>
          <div>
            <h5 className=''>Traditional Ceremony</h5>
            <h6>Friday, June 23rd</h6>
          </div>
          <p className='font-light'>
            Additional information available on the invites
          </p>
          <hr />
          <div>
            <h5 className='font-sans'>White Wedding</h5>
            <h6>Saturday, June 24th</h6>
          </div>
          <p className='font-light'>
            Additional information available on the invites
          </p>
        </div>
      </section>
      <section className='flex flex-col m-auto items-center p-5 text-[#001944]'>
        <h1 className='underline underline-offset-8 sm:no-underline mt-2 mb-8 sm:px-4 sm:border-l-8 sm:border-[#001944] font-serif'>
          Gallery
        </h1>
        <ul className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center'>
          <li className=''>
            <Image
              className='rounded-lg object-cover align-bottom'
              src={gallery}
              alt='lovely couple'
            />
          </li>
          <li className=''>
            <Image
              className='rounded-lg object-cover align-bottom'
              src={gallery}
              alt='lovely couple'
            />
          </li>
          <li className=''>
            <Image
              className='rounded-lg object-cover align-bottom'
              src={gallery}
              alt='lovely couple'
            />
          </li>
          <li className=''>
            <Image
              className='rounded-lg object-cover align-bottom'
              src={gallery}
              alt='lovely couple'
            />
          </li>
          <li className=''>
            <Image
              className='rounded-lg object-cover align-bottom'
              src={gallery}
              alt='lovely couple'
            />
          </li>
        </ul>
        <div className='flex flex-col items-center mt-10 sm:flex sm:flex-row sm:justify-center sm:my-5'>
          <Link
            href='/gallery'
            className='font-sans border-2 border-[#0047A6] rounded-full px-4 py-3 text-[#0047A6] w-[150px] text-center'
          >
            Go to Gallery
          </Link>
          <Link
            href='/gift-registry'
            className='font-sans rounded-full px-4 py-3 my-3 bg-[#0047A6] text-white w-[150px] text-center sm:mx-5'
          >
            Gift Us
          </Link>
        </div>
      </section>
      <hr className='text-[#001944] mt-10' />
      <footer className='flex justify-center'>
        <button onClick={scrollToTop} className='font-sans my-5 text-[#0047A6]'>
          Back to top &#8593;{' '}
        </button>
      </footer>
    </div>
  );
}
