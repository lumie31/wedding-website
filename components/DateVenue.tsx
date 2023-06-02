import Image from 'next/image';
import couple from '@/public/images/coupleHero.png';

export default function DateVenue() {
  return (
    <section className='h-[500px] text-[#001944] p-4 flex flex-col items-center justify-end relative sm:flex-row sm:justify-around font-serif'>
      <div className='relative flex items-center justify-center w-full sm:w-auto sm:order-2 sm:mb-12'>
        <Image
          src={couple}
          height={570}
          alt='image showing the couple together'
          className='mx-auto sm:static'
        />
      </div>
      <h2 className='self-center sm:text-right sm:w-1/3 sm:self-start sm:mt-5 sm:order-1'>
        June 23 & 24, 2023
      </h2>
      <h2 className='self-center sm:text-left sm:w-1/3 sm:self-end sm:order-3 sm:mb-10'>
        Ibadan, NG
      </h2>
    </section>
  );
}
