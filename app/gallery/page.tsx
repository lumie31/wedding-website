'use client';

import Header from '@/components/Header';
import GalleryComponent from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Gallery() {
  return (
    <div>
      <Header backgroundImg='bg-gallery'>
        <h1 className='text-center'>Gallery</h1>
      </Header>
      <GalleryComponent withButtons={false} withHeader={false} />
      <Footer />
    </div>
  );
}
