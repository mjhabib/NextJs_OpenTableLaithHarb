import HomeHeader from './HomeHeader';
import HomeRestaurantCard from './HomeRestaurantCard';

export default function HomePage() {
  return (
    <main>
      <HomeHeader />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        <HomeRestaurantCard />
      </div>
    </main>
  );
}
