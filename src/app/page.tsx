import HomeHeader from './HomeHeader';
import HomeRestaurantCard from './HomeRestaurantCard';

export default function HomePage() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <main>
          <HomeHeader />
          {/* CARDS */}
          <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
            <HomeRestaurantCard />
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
