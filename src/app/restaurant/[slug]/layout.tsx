import RestaurantHeader from './RestaurantHeader';

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <RestaurantHeader />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'></div>
      {children}
    </div>
  );
}
