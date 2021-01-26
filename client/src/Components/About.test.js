import About from "./About";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React, { createElement } from "react";
import ReactDOM from "react-dom";

// primitive UI testing without snapshot

test("About Component should be ... ", () => {
  // dummy - works
  /*   const cont = document.createElement("div");
  ReactDOM.render("<p>About Page</p>", cont);
  expect(cont.innerHTML).toBe("&lt;p&gt;About Page&lt;/p&gt;");
  console.log("Test HTML Element: ", cont); */

  // const cont = document.createElement("div");
  render(<About />);

  // it works - but it is too strict - to0 exact
  // expect(cont.innerHTML).toBe("<p>About Page</p>");

  // to test: to see if right elements are there
  // user interaction
  expect(screen.getByText).toMatch("About Page");
});
