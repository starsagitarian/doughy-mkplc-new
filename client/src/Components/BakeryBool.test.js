/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import BakeryBool from "./BakeryBool";
import React, { createElement } from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockUser = "Admin";

test("If button is clicked should say TRUE / FALSE ... ", () => {
  // mocking ...
  // render(<BakeryBool user={mockUser} />);

  render(<BakeryBool />);
  const button = screen.getByText(/bool/i);
  expect(button).toBeInTheDocument();
  expect(screen.getByText(/false/i)).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /bool/i }));
  expect(screen.getByText(/true/i)).toBeInTheDocument();
  expect(screen.queryByText(/false/i)).not.toBeInTheDocument();
  userEvent.click(button);
  expect(screen.getByText(/false/i)).toBeInTheDocument();
});
