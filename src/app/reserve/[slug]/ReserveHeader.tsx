import Image from 'next/image';

export default function ReserveHeader() {
  return (
    <div>
      <h3 className='font-bold'>You&apos;re almost done!</h3>
      <div className='mt-5 flex'>
        <Image
          src='/plate-of-food.jpg'
          alt='plate of food'
          width={100}
          height={100}
          className='w-32 h-18 rounded'
        />
        <div className='ml-4'>
          <h1 className='text-3xl font-bold'>Aiāna Restaurant Collective</h1>
          <div className='flex mt-3'>
            <p className='mr-6'>Tues, 22, 2023</p>
            <p className='mr-6'>7:30 PM</p>
            <p className='mr-6'>3 people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
