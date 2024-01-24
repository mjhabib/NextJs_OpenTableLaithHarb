import SearchHeader from './SearchHeader';
import SearchSidebar from './SearchSidebar';
import SearchRestaurantCard from './SearchRestaurantCard';
import { Metadata } from 'next/types';
import db from '@root/prisma/db';

const select = {
  id: true,
  name: true,
  price: true,
  slug: true,
  main_img: true,
  cuisine: true,
  location: true,
};

const fetchRestaurantsByCity = (city: string | undefined) => {
  if (!city) {
    return db.restaurant.findMany({ select });
  }

  return db.restaurant.findMany({
    where: { location: { name: { equals: city.toLowerCase() } } },
    select: select,
  });
};

interface Props {
  searchParams: { city: string };
}

export default async function SearchParams({ searchParams }: Props) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <div className='w-5/6'>
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <SearchRestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))}
            </>
          ) : (
            <p className='text-red-400'>
              Sorry, we found no restaurants in this area!
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Search Restaurants | OpenTable',
  description: 'Search among all the restaurants',
};
