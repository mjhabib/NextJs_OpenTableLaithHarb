import { PRICE, Cuisine, Location, Review } from '@prisma/client';
import Stars from '@src/components/Stars';
import CalculateReviewRating from '@src/components/CalculateReviewRatings';
import Price from '@src/components/Price';
import Link from 'next/link';

interface RestaurantType {
  id: number;
  name: string;
  main_img: string;
  slug: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  review: Review[];
}

export default function SearchRestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantType;
}) {
  const renderRatingText = () => {
    const rating = CalculateReviewRating(restaurant.review);
    if (rating > 4) {
      return 'Awesome';
    } else if (rating <= 4 && rating > 3) {
      return 'Good';
    } else if (rating <= 3 && rating > 0) {
      return 'Average';
    } else {
      return '';
    }
  };

  return (
    <div className='border-b flex pb-5 ml-4'>
      <img
        src={restaurant.main_img}
        alt=''
        // width={100}
        // height={100}
        className='w-44 h-36 rounded'
      />
      <div className='pl-5'>
        <h2 className='text-3xl'>{restaurant.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>
            <Stars reviews={restaurant.review} />
          </div>
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <Price price={restaurant.price} />
            <p className='mr-4 capitalize'>{restaurant.cuisine.name}</p>
            <p className='mr-4 capitalize'>{restaurant.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
