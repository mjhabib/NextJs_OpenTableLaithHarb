import SearchHeader from './SearchHeader';
import SearchSidebar from './SearchSidebar';
import SearchRestaurantCard from './SearchRestaurantCard';
import { Metadata } from 'next/types';
import db from '@root/prisma/db';
import { PRICE } from '@prisma/client';

interface SearchParamsProps {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const select = {
  id: true,
  name: true,
  price: true,
  slug: true,
  main_img: true,
  cuisine: true,
  location: true,
  review: true,
};

const fetchRestaurantsByCity = (searchParams: SearchParamsProps) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  return db.restaurant.findMany({
    where: where,
    select: select,
  });
};

const fetchLocations = () => {
  return db.location.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

const fetchCuisines = () => {
  return db.cuisine.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export default async function SearchParams({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
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
