import About from "./About";

import React, { createElement } from "react";
import ReactDOM from "react-dom";

test("About Component should be ... ", () => {
  // dummy - works
  /*   const cont = document.createElement("div");
  ReactDOM.render("<p>About Page</p>", cont);
  expect(cont.innerHTML).toBe("&lt;p&gt;About Page&lt;/p&gt;");
  console.log("Test HTML Element: ", cont); */

  const cont = document.createElement("div");
  ReactDOM.render(<About />, cont);

  // it works - but it is too strict - to exact
  // expect(cont.innerHTML).toBe("<p>About Page</p>");

  expect(cont.textContent).toMatch("About Page");
});
