/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import Customers from "./Customers";
import CustomersList from "./CustomersList";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const mockCustomersList = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Erwin Rommel",
    username: "DesertFox",
    email: "Erwin@reich.de",
  },
];

it("displays a list of customers on screen with the title", () => {
  render(<Customers />);
  const heading = screen.getByText("CUSTOMERS");
  expect(heading).toBeInTheDocument();
});

it("Button should show 'hi' initialy and 'Bye' upon click", () => {
  render(<Customers />);
  const buttTextStart = screen.getByText(/show/i);
  expect(buttTextStart).toBeInTheDocument();
  userEvent.click(buttTextStart);
  const buttTextEnd = screen.getByText(/hide/i);
  expect(buttTextEnd).toBeInTheDocument();
});

it("button should show list once clicked", () => {
  render(<Customers />);
  const buttonUnclicked = screen.getByRole("button", { name: /show/i });
  userEvent.click(buttonUnclicked);
  render(<CustomersList customers={mockCustomersList} />);

  const elementOfList = screen.getByText(/Howell/i);
  expect(elementOfList).toBeInTheDocument();

  const list = screen.getAllByText(/Customer:/i);
  console.log(list);
  expect(list).toHaveLength(3);
});
