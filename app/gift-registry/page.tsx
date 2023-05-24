'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import copy from '@/public/images/copy.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GiftRegistry() {
  function copyToClipboard(numString: string) {
    navigator.clipboard.writeText(numString);
    toast('Copied!', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }

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
            <h5 className=''>Access Bank</h5>
            <button
              onClick={() => copyToClipboard('0691510512')}
              className='rounded-lg bg-slate-50 text-[#001944] px-5 py-1 my-2 w-[165px] font-serif font-bold flex justify-between items-center text-xl hover:bg-slate-200'
            >
              0691510512
              <Image src={copy} alt='copy' width={15} height={15} />
            </button>
            <ToastContainer style={{ width: '200px' }} />
            <p className='font-light'>Adefiyinfoluwa Adeniyi</p>
          </div>
          <hr className='my-4 sm:my-2' />
          <h6 className='font-serif font-semibold text-xl'>Naira Account</h6>
          <div className='flex flex-col items-center'>
            <h5 className=''>GT Bank </h5>
            <button
              onClick={() => copyToClipboard('0127642825')}
              className='rounded-lg bg-slate-50 text-[#001944] px-5 py-1 my-2 w-[165px] font-serif font-bold flex justify-between items-center text-xl hover:bg-slate-200'
            >
              0127642825
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
