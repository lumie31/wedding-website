import Link from 'next/link';
import Image from 'next/image';
import image from '@/public/images/gallery.png';

export default function OurStory() {
  return (
    <div className=' bg-[#052862] mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:mt-4'>
      <div className='flex flex-col sm:w-1/2 items-center  text-white'>
        <div className='underline underline-offset-8 order-1 sm:no-underline sm:self-start sm:border-l-8 px-2 sm:px-4 sm:mr-2'>
          <h1 className='font-serif'>Our Story</h1>
        </div>
        <p className='text-justify text-ellipsis font-sans py-3 my-4 font-thin leading-loose order-2 sm:text-left sm:self-start sm:mr-2'>
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
          className='font-sans self-start py-4 order-4 sm:order-3 hover:border-red-500 hover:rounded-full hover:px-2 hover:bg-white hover:text-[#001944]'
        >
          Read full story here &rarr;
        </Link>
      </div>
      {/* <div className='order-2'>
        <Image className='rounded-lg' src={image} alt='lovely couple' />
      </div> */}
    </div>
  );
}
