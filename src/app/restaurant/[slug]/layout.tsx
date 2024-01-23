import RestaurantHeader from './RestaurantHeader';

export default function RestaurantLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return (
    <div>
      <RestaurantHeader name={params.slug} />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'></div>
      {children}
    </div>
  );
}
