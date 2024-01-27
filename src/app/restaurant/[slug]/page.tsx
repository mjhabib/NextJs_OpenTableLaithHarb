import { Metadata } from 'next/types';
import RestaurantDescription from './RestaurantDescription';
import RestaurantImage from './RestaurantImage';
import RestaurantNavbar from './RestaurantNavbar';
import RestaurantRate from './RestaurantRate';
import RestaurantReserveCard from './RestaurantReserveCard';
import RestaurantReview from './RestaurantReview';
import RestaurantTitle from './RestaurantTitle';
import db from '@root/prisma/db';
import { Review } from '@prisma/client';

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  review: Review[];
}

export const fetchRestaurantBySlug = async (
  slug: string
): Promise<Restaurant> => {
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      review: true,
    },
  });

  if (!restaurant) {
    throw new Error('Something went wrong!');
  }

  return restaurant;
};

interface Props {
  params: { slug: string };
}

export default async function RestaurantDetailPage({ params }: Props) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavbar slug={restaurant.slug} />
        <RestaurantTitle name={restaurant.name} />
        <RestaurantRate reviews={restaurant.review} />
        <RestaurantDescription description={restaurant.description} />
        <RestaurantImage key={restaurant.id} images={restaurant.images} />
        <RestaurantReview reviews={restaurant.review} />
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
