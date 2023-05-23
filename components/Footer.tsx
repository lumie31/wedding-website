export default function Footer() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <hr className='text-[#001944] mt-10' />
      <footer className='flex justify-center'>
        <button onClick={scrollToTop} className='font-sans my-5 text-[#0047A6]'>
          Back to top &#8593;{' '}
        </button>
      </footer>
    </>
  );
}
