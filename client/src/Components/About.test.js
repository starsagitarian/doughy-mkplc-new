/* eslint-disable no-undef */
import React from "react";
import About from "./About";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// primitive UI testing without snapshot
test("About Component should be ... ", () => {
  render(<About />);
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});
