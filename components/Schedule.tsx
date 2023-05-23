export default function Schedule() {
  return (
    <section className='h-[450px] flex justify-center items-center text-white'>
      <div className='flex flex-col justify-around h-96 w-full rounded-lg bg-[#052862] py-3 px-7 my-5 mx-5 text-center font-sans sm:w-[470px]'>
        <h2 className='font-serif'>Schedule</h2>
        <div>
          <h5 className=''>Traditional Ceremony</h5>
          <h6>Friday, June 23rd</h6>
        </div>
        <p className='font-light'>
          Additional information available on the invites
        </p>
        <hr />
        <div>
          <h5 className='font-sans'>White Wedding</h5>
          <h6>Saturday, June 24th</h6>
        </div>
        <p className='font-light'>
          Additional information available on the invites
        </p>
      </div>
    </section>
  );
}
