'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import firstEncounter from '@/public/images/firstEncounter.png';
import finallyMeeting from '@/public/images/finallyMeeting.png';
import firstDate from '@/public/images/firstDate.png';
import forever from '@/public/images/forever.png';
import proposal from '@/public/images/proposal.png';

export default function OurStory() {
  return (
    <div>
      <Header backgroundImg='bg-story'>
        <h1 className='text-center'>Our Story</h1>
      </Header>
      <div className='mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:items-start sm:mt-4'>
        <div className='flex flex-col sm:w-1/2'>
          <div className='border-[#001944] border-l-8 flex flex-col px-2 sm:px-4 sm:mr-2 order-1 self-start'>
            <h2 className='text-[#001944] font-serif sm:inline'>
              First Encounter
            </h2>
            <p className='text-[#666666] font-light sm:inline'>Sep, 2014</p>
          </div>
          <p className='text-justify text-ellipsis font-sans py-3 text-[#001944] font-thin leading-loose order-2 sm:text-left sm:self-start sm:mr-2'>
            Nine years ago, we met through a mutual friend. It was an online
            encounter that started our journey together. We lived in different
            parts of Nigeria, and our first physical meeting didn&#39;t happen
            until five years later. But even without meeting in person, we felt
            a strong connection and stayed in touch through social media and
            messaging apps. <br /> As the years went by, we watched each other
            grow and develop into amazing individuals. Our friendship grew
            stronger, and we felt a sense of comfort in each other&#39;s
            company. We shared stories about our lives, our struggles, and our
            aspirations. We realized that we had a lot in common and shared many
            of the same values.
          </p>
        </div>
        <div className='sm:self-end order-3'>
          <Image
            className=''
            width={400}
            height={400}
            src={firstEncounter}
            alt='image showing couple first encounter'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:mt-4'>
        <div className='flex flex-col sm:w-1/2 sm:self-start sm:order-2'>
          <div className='border-[#001944] border-l-8 flex flex-col px-2 sm:px-4 sm:ml-2 order-2 self-start'>
            <h2 className='text-[#001944] font-serif sm:inline'>
              Finally Meeting
            </h2>
            <p className='text-[#666666] font-light sm:inline'>Dec, 2018</p>
          </div>
          <p className='text-justify text-ellipsis font-sans py-3 text-[#001944] font-thin leading-loose order-2 sm:text-left sm:self-start sm:ml-2'>
            Finally, after five long years of online communication, we had the
            opportunity to meet each other in person. It was an emotional
            moment, and we hugged each other in the middle of Water Corporation
            Road, Oniru, feeling like we had known each other for a lifetime.
            After that first meeting, we continued to communicate regularly and
            became even closer friends. We supported each other, and we felt
            grateful to have each other in our lives.
            <br />
            <br />
            During Fiyin&#39;s service year, we realized that our friendship had
            evolved into something more. We both had developed feelings for each
            other, and we took a leap of faith and confessed our love for each
            other. That moment changed everything. We became a couple, and it
            felt like the missing piece of our lives had finally fallen into
            place.
          </p>
        </div>
        <div className='sm:self-start sm:order-1'>
          <Image
            className=''
            src={finallyMeeting}
            width={400}
            height={400}
            alt='image showing couple finally meeting in person'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:mt-4'>
        <div className='flex flex-col sm:w-1/2 sm:self-start'>
          <div className='border-[#001944] border-l-8 flex flex-col px-2 sm:px-4 sm:mr-2 order-1 self-start'>
            <h2 className='text-[#001944] font-serif sm:inline'>First Date</h2>
            <p className='text-[#666666] font-light sm:inline'>Aug, 2019</p>
          </div>
          <p className='text-justify text-ellipsis font-sans py-3 text-[#001944] font-thin leading-loose order-2 sm:text-left sm:self-start sm:mr-2'>
            Aha! It was an Amala date o! A lunch date, following Fiyin&#39;s
            complaint of not having good Amala since she arrived Lagos. Oya
            Brother Tobi rises to the challenge to find his best candidate yet,
            on the island. She said it was the best Amala she had ever had...
            Naah she liked it but she didn&#39;t see it as anything over the
            top, as a confirmed and correct Ibadan representative.
          </p>
        </div>
        <div className='sm:self-end order-3'>
          <Image
            className=''
            src={firstDate}
            width={400}
            height={400}
            alt='image showing couple on their first date'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:mt-4'>
        <div className='flex flex-col sm:w-1/2 sm:self-start sm:order-2'>
          <div className='border-[#001944] border-l-8 flex flex-col px-2 sm:px-4 sm:ml-2 order-2 self-start'>
            <h2 className='text-[#001944] font-serif sm:inline'>
              We Know It&#39;s Forever
            </h2>
            <p className='text-[#666666] font-light sm:inline'>
              Feb. 2019 for Tobi · Jan. 2020 for Fiyin
            </p>
          </div>
          <p className='text-justify text-ellipsis font-sans py-3 text-[#001944] font-thin leading-loose order-2 sm:text-left sm:self-start sm:ml-2'>
            In my heart I knew she was the One. I just knew it. Its a feeling
            you can&#39;t exactly describe, you just know it without an iota of
            doubt. Looking back on our journey so far, we both agree that it has
            been a blessed one. We are grateful for our online meeting, which
            brought us together, and for the journey that has led us to where we
            are today. We have grown from close friends to partners who share a
            deep love and respect for each other. <br />
            <br />
            Our story is a testament to the power of friendship, love, and
            patience. It shows that sometimes the best things in life take time,
            but they are worth the wait. We are excited about what the future
            holds and look forward to continuing our journey together.
          </p>
        </div>
        <div className='sm:self-start sm:order-1'>
          <Image
            className=''
            src={forever}
            width={400}
            height={400}
            alt='image showing the couple together'
          />
        </div>
      </div>
      <div className='mt-5 flex flex-col p-5 items-center sm:flex sm:flex-row sm:justify-around sm:mt-4'>
        <div className='flex flex-col sm:w-1/2 sm:self-start'>
          <div className='border-[#001944] border-l-8 flex flex-col px-2 sm:px-4 sm:mr-2 order-1 self-start'>
            <h2 className='text-[#001944] font-serif sm:inline'>Proposal</h2>
            <p className='text-[#666666] font-light sm:inline'>Nov, 2022</p>
          </div>
          <p className='text-justify text-ellipsis font-sans py-3 text-[#001944] font-thin leading-loose order-2 sm:text-left sm:self-start sm:mr-2'>
            It was private, calm and I feel Tee went all out, being the quiet
            and shy person he is. I feel my facial expressions barely
            communicated the multitude of positive emotions I was feeling all
            through that night. I felt like a princess at a kingdom-wide ball,
            and Tee was my prince charming.
          </p>
        </div>
        <div className='sm:self-end order-3'>
          <Image
            className=''
            src={proposal}
            width={400}
            height={400}
            alt='image showing couple wedding proposal'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
