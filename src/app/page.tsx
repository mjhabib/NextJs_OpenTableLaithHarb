import db from '@root/prisma/db';
import HomeHeader from './HomeHeader';
import HomeRestaurantCard from './HomeRestaurantCard';
import { Cuisine, PRICE, Location } from '@prisma/client';

export interface RestaurantCardTypes {
  id: number;
  name: string;
  main_img: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

export const fetchRestaurant = async (): Promise<RestaurantCardTypes[]> => {
  const restaurants = await db.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_img: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

  return restaurants;
};

export default async function HomePage() {
  const restaurants = await fetchRestaurant();

  return (
    <main>
      <HomeHeader />
      <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
        {restaurants.map((restaurant) => (
          <HomeRestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </main>
  );
}
