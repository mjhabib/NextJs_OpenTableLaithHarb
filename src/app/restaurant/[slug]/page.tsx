import RestaurantDescription from './RestaurantDescription';
import RestaurantHeader from './RestaurantHeader';
import RestaurantImage from './RestaurantImage';
import RestaurantNavbar from './RestaurantNavbar';
import RestaurantRate from './RestaurantRate';
import RestaurantReserveCard from './RestaurantReserveCard';
import RestaurantReview from './RestaurantReview';
import RestaurantTitle from './RestaurantTitle';

export default function RestaurantDetailPage() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <RestaurantHeader />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
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
        </div>
      </main>
    </main>
  );
}
