import { Metadata } from 'next/types';
import RestaurantDescription from './RestaurantDescription';
import RestaurantImage from './RestaurantImage';
import RestaurantNavbar from './RestaurantNavbar';
import RestaurantRate from './RestaurantRate';
import RestaurantReserveCard from './RestaurantReserveCard';
import RestaurantReview from './RestaurantReview';
import RestaurantTitle from './RestaurantTitle';

export default function RestaurantDetailPage() {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar />
        <RestaurantTitle />
        <RestaurantRate />
        <RestaurantDescription />
        <RestaurantImage />
        <RestaurantReview />
      </div>
      <div className='w-[27%] relative text-reg'>
        <RestaurantReserveCard />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Restaurant TEST - OpenTable',
  description: 'Details about the TEST restaurant',
};
