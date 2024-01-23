import { Metadata } from 'next/types';
import RestaurantNavbar from '../RestaurantNavbar';
import RestaurantMenu from './RestaurantMenu';

export default function MenuPage() {
  return (
    <>
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNavbar />
        <RestaurantMenu />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'TEST Menu | OpenTable',
  description: 'See the menu for the TEST restaurant',
};
