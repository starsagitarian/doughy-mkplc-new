/* eslint-disable no-undef */
import ReviewRating from './ReviewRating';
import React, { createElement } from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockProps = 5;

describe("Review Ratings:", () => {

  test("If button is clicked should say TRUE / FALSE ... ", () => {
  // mocking ...
  // render(<BakeryBool user={mockUser} />);

  render(<ReviewRating score={mockProps} />);
  const resetButton=screen.getByTestId('reset-button');
  expect(resetButton).toBeInTheDocument();
  // expect(screen.getByText(/REVIEWS/i)).toBeInTheDocument();
  // userEvent.click(screen.getByRole("button", { name: /REVIEWS/i }));
  // expect(screen.getByText(/REVIEWS/i)).toBeInTheDocument();
  // expect(screen.queryByText(/REVIEWSs/i)).not.toBeInTheDocument();
  userEvent.click(resetButton);
  expect(screen.getByText(/VALUE:0/i)).toBeInTheDocument();
});
});
