import Image from 'next/image';
import lovers from '../public/images/lovers.png';

export default function DateVenue() {
  return (
    <section className='h-100 text-[#001944] p-4 flex flex-col items-center sm:flex-row sm:justify-between font-serif'>
      <Image
        src={lovers}
        width={350}
        height={350}
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
  );
}
