import Image from 'next/image';
import Link from 'next/link';
import gallery from '../public/images/gallery.png';

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
        <h1 className='underline underline-offset-8 sm:no-underline mt-2 mb-8 sm:px-4 sm:border-l-8 sm:border-[#001944] font-serif'>
          Gallery
        </h1>
      ) : (
        ''
      )}
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
