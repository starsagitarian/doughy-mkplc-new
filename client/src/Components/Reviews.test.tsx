import Reviews from "./Reviews";
import Review from "./Review";
import React, { createElement } from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockUser = "Admin";
const mockReview =  {
  "bakery": "Cafe d'Avignon Dekalb Market",
  "customer":"Wladimir",
  "description":"Absolutely loved this place. Mum and I celebrated her 80th birthday here. Szylvia looked after us, serving a beautiful array of sandwiches, scones and cakes. All very fresh and tasty. When we were leaving I mentioned that it was mum's birthday and the lovely manager let her choose a piece of cake from their delicious selection. I got the deal on Groupon and it was a lovely treat for mum. She also got a brief history lesson on Valerie's. We boxed up what we couldn't eat for the kids to enjoy at home.",
  "score":5
};

test("If button is clicked should say TRUE / FALSE ... ", () => {
  // mocking ...
  // render(<BakeryBool user={mockUser} />);

  render(<Reviews />);
  expect(screen.getByText(/REVIEWS/i)).toBeInTheDocument();
  expect(screen.getByText(/RBUTTON/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /RBUTTON/i }));
  render(<Review review={mockReview}/>);
  
  const newReviewComponent=screen.getByText(/Something:4/i)
  expect(newReviewComponent).toBeInTheDocument();
  console.log("newReviewComponent: ", newReviewComponent.nodeType, newReviewComponent.textContent);
  expect(newReviewComponent.textContent).toEqual("Something:4");

  /*expect(screen.queryByText(/off/i)).not.toBeInTheDocument();
  userEvent.click(screen.getByText('Add'));
  expect(screen.getByText(/off/i)).toBeInTheDocument(); */
});