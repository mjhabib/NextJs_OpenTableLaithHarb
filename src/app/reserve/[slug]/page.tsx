import { Metadata } from 'next/types';
import ReserveForm from './ReserveForm';
import ReserveHeader from './ReserveHeader';

export default function ReservePage() {
  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Reserve TEST | OpenTable',
  description: 'Reserve in TEST restaurant',
};
