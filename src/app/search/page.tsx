import Image from 'next/image';
import SearchHeader from './SearchHeader';
import SearchSidebar from './SearchSidebar';
import SearchRestaurantCard from './SearchRestaurantCard';

export default function SearchPage() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <SearchHeader />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSidebar />
          <div className='w-5/6'>
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
