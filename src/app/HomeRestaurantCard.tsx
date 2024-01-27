import Image from 'next/image';
import { RestaurantCardTypes } from './page';
import Link from 'next/link';
import Price from '../components/Price';
import Stars from '../components/Stars';

export interface Props {
  restaurant: RestaurantCardTypes;
}

export default function HomeRestaurantCard({ restaurant }: Props) {
  return (
    <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          src={restaurant.main_img}
          alt=''
          // width={100}
          // height={100}
          className='w-full h-36'
        />
        <div className='p-1'>
          <h3 className='font-bold text-2xl mb-2'>{restaurant.name}</h3>
          <div className='flex items-start'>
            <Stars reviews={restaurant.review} />
            <p className='ml-2'>
              {restaurant.review.length} review
              {restaurant.review.length > 1 && 's'}
            </p>
          </div>
          <div className='flex text-reg font-light capitalize'>
            <p className=' mr-3'>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
}
