import fullStar from '@root/public/icons/full-star.png';
import halfStar from '@root/public/icons/half-star.png';
import emptyStar from '@root/public/icons/empty-star.png';
import { Review } from '@prisma/client';
import CalculateReviewRating from './CalculateReviewRatings';
import Image from 'next/image';

export default function Stars({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || CalculateReviewRating(reviews);

  const renderStars = () => {
    const stars = [];

    for (let index = 0; index < 5; index++) {
      const difference = parseFloat((reviewRating - index).toFixed(1));

      if (difference >= 1) {
        stars.push(fullStar);
      } else if (difference > 0 && difference < 1) {
        if (difference <= 0.2) {
          stars.push(emptyStar);
        } else if (difference > 0.2 && difference <= 0.6) {
          stars.push(halfStar);
        } else {
          stars.push(fullStar);
        }
      } else {
        stars.push(emptyStar);
      }
    }
    return stars.map((star) => {
      return <Image className='w-4 h-4 mr-1' src={star} alt='' key={'0'} />;
    });
  };

  return <div className='flex items-center'>{renderStars()}</div>;
}
