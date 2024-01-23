import SearchHeader from './SearchHeader';
import SearchSidebar from './SearchSidebar';
import SearchRestaurantCard from './SearchRestaurantCard';
import { Metadata } from 'next/types';

export default function SearchPage() {
  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Search Restaurants | OpenTable',
  description: 'Search among all the restaurants',
};
