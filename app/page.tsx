import Image from 'next/image';
import lovers from '../public/images/lovers.png';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header>
        <p className='text-3xl text-center'>Fiyin and Tobi</p>
        <p className='text-3xl text-center'>
          are getting&nbsp;
          <span className='text-white'>married!</span>
        </p>
      </Header>
      <section className='h-100 p-4 flex flex-col items-center sm:flex-row sm:justify-between'>
        <Image
          src={lovers}
          width={320}
          height={320}
          alt='love'
          className='sm:order-2'
        />
        <p className='text-3xl sm:order-1 sm:w-1/3'>June 23 & 24, 2023</p>
        <p className='text-3xl sm:order-3 sm:text-right sm:w-1/3'>Ibadan, NG</p>
      </section>
      <section className='h-96 p-4 bg-[#052862]'>
        <p className='text-3xl border-l-2 px-3'>Our Story</p>
      </section>
    </div>
  );
}
