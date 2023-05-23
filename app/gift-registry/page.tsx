'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import copy from '@/public/images/copy.png';
import Image from 'next/image';

export default function GiftRegistry() {
  return (
    <div>
      <Header backgroundImg='bg-gift'>
        <h1 className='text-center'>Gift Registry</h1>
      </Header>
      <section className='h-[500px] flex flex-col justify-center mx-4 items-center text-black sm:mt-5'>
        <h5 className='text-xl font-serif my-5 text-center sm:text-2xl sm:w-3/5'>
          We are happy that you willing to share in our love with your
          generosity. We don&#39;t have a specific wish list but we appreciate
          cash gifts.
        </h5>
        <div className='flex flex-col justify-around h-96 w-full rounded-lg bg-[#052862] py-3 px-7 my-5 mx-5 text-center font-sans sm:w-[470px] text-white'>
          <h6 className='font-serif font-semibold text-xl'>Naira Account</h6>
          <div className='flex flex-col items-center'>
            <h5 className=''>Opay</h5>
            <button className='rounded-lg bg-slate-50 text-[#001944] px-5 py-1 my-2 w-[165px] font-serif font-bold flex justify-between items-center text-xl'>
              8118117634
              <Image src={copy} alt='copy' width={15} height={15} />
            </button>
            <p className='font-light'>Adefiyinfoluwa Adeniyi</p>
          </div>
          <hr className='my-4 sm:my-2' />
          <h6 className='font-serif font-semibold text-xl'>Foreign Account</h6>
          <div className='flex flex-col items-center'>
            <h5 className=''>First Bank Nigeria</h5>
            <button className='rounded-lg bg-slate-50 text-[#001944] px-5 py-1 my-2 w-[150px] font-serif font-bold flex justify-around items-center text-xl'>
              Pending
              <Image src={copy} alt='copy' width={15} height={15} />
            </button>
            <p className='font-light'>Oluwatobiloba Adeyemi</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
