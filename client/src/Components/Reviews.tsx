import React from 'react';
import DBreviews from "../DB/reviews.json";


interface Review{
  bakery: string;
  customer:string;
  review:string;
  score:number;
}

// export default function BakeryReviews(prop: Review) {
export default function BakeryReviews() {

  const reviews: Review[]=DBreviews;
  
  return (
    <div style={{margin: 60}}>
            <h1>REVIEWS</h1>
      {reviews.map(review=><li key={review.customer} >{review.bakery} {review.customer} {review.review} {review.score}</li>)}
    </div>
  );
}
