import React , { useState } from "react";
import DBreviews from "../DB/db_reviews.json";
import IReview from "../Interfaces/IReview";
import Review from "./Review";
import Button from '@material-ui/core/Button';
import ReviewAdd from "./ReviewAdd";

// this Component is added to test TypeScript
// tomorrow we will connect BACK-END and will use it for testing it.

export default function BakeryReviews() {

  const [isClicked, setIsClicked] = useState(false);

  const OpenForm = () => {
    setIsClicked(!isClicked);
  };

  let reviews: IReview[]=DBreviews;
  
  return (
    
    <div style={{margin: 60}}>

      <Button onClick={() => OpenForm()} color="primary" size="small" style={{height: 30}} >Add Review</Button>
        <button style={{background: "darkblue", color: "whitesmoke"}} onClick={() => OpenForm()}>RBUTTON</button>
        {isClicked ? (
          <ReviewAdd/>
          ) : (
          <p style={{ background: "darkred", color: "white" }}>Add Review Form is OFF</p>
        )}
        <h1>REVIEWS</h1>
        {isClicked ? (
           reviews.map(review=><li key={review.customer} ><Review review={review}></Review></li>)
          ) : (
          <p style={{ background: "darkred", color: "white" }}>Add Review Form is OFF</p>
        )}
     
    </div>
  );
}