import Image from 'next/image';

export default function RestaurantImage() {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>5 photos</h1>
      <div className='flex flex-wrap'>
        <Image
          className='w-56 h-44 mr-1 mb-1'
          src='/rice-with-chicken.jpg'
          alt='rice with chicken'
          width={100}
          height={100}
        />
        <Image
          className='w-56 h-44 mr-1 mb-1'
          src='/plate-with-bread.jpg'
          alt='plate with bread'
          width={0}
          height={0}
        />
        <Image
          className='w-56 h-44 mr-1 mb-1'
          src='/wine-and-food.jpg'
          alt='wine and food'
          width={0}
          height={0}
        />
        <Image
          className='w-56 h-44 mr-1 mb-1'
          src='/cake-with-cream.jpg'
          alt='cake with cream'
          width={0}
          height={0}
        />
        <Image
          className='w-56 h-44 mr-1 mb-1'
          src='/shrimp-and-chips.jpg'
          alt='shrimp and chips'
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
