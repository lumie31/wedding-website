import Image from 'next/image';
import Link from 'next/link';
import first from '@/public/images/gallery1.png';
import second from '@/public/images/gallery2.png';
import third from '@/public/images/gallery3.png';
import fourth from '@/public/images/gallery4.png';
import fifth from '@/public/images/gallery5.png';
import sixth from '@/public/images/gallery6.png';
import seventh from '@/public/images/gallery7.png';
import eighth from '@/public/images/gallery8.png';
import nineth from '@/public/images/gallery9.png';
// import { Images } from '@/utils/file';

interface GalleryProp {
  withHeader: boolean;
  withButtons: boolean;
}

export default function Gallery({
  withHeader = true,
  withButtons = true,
}: GalleryProp) {
  return (
    <section className='flex flex-col sm:mt-5 items-center p-5 text-[#001944]'>
      {withHeader ? (
        <div className='mb-12 flex flex-col justify-center items-center'>
          <h1 className='mt-2 sm:px-4 sm:border-l-8 sm:border-[#001944] font-serif'>
            Gallery
          </h1>
          <hr className='w-3/5 my-2 border-[#001944] border-2 sm:hidden text-blue'></hr>
        </div>
      ) : (
        ''
      )}
      <ul className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center'>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={first}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={second}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={third}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={fourth}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={fifth}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={sixth}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={seventh}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={eighth}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
        <li className=''>
          <Image
            className='object-cover align-bottom'
            src={nineth}
            width={400}
            height={400}
            alt='lovely couple'
          />
        </li>
      </ul>
      {withButtons ? (
        <div className='flex flex-col items-center mt-10 sm:flex sm:flex-row sm:justify-center sm:my-5'>
          <Link
            href='/gallery'
            className='font-sans border-2 border-[#0047A6] rounded-full px-4 py-3 text-[#0047A6] w-[150px] text-center hover:text-slate-300'
          >
            Go to Gallery
          </Link>
          <Link
            href='/gift-registry'
            className='font-sans rounded-full px-4 py-3 my-3 bg-[#0047A6] text-white w-[150px] text-center sm:mx-5 hover:text-slate-300'
          >
            Gift Us
          </Link>
        </div>
      ) : (
        ''
      )}
    </section>
  );
}
