import { Metadata } from 'next/types';
import RestaurantNavbar from '../RestaurantNavbar';
import RestaurantMenu from './RestaurantMenu';
import db from '@root/prisma/db';

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    select: { items: true },
  });

  if (!restaurant) {
    throw new Error('Something went wrong');
  }

  return restaurant.items;
};

interface Props {
  params: { slug: string };
}

export default async function MenuPage({ params }: Props) {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavbar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'TEST Menu | OpenTable',
  description: 'See the menu for the TEST restaurant',
};
