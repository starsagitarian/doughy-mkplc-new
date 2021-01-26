/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// OMG! Simulate Button Click for Material UI Element is a challenge!

// 3. TEST: to test state of the component

import BakeryBool from "./BakeryBool";
import React, { createElement } from "react";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
// import { Button } from "@material-ui/core";
// import { render, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";

const mockUser = "Admin";

test("If button is clicked should say TRUE / FALSE ... ", () => {
  // const mockCallBack = jest.fn();
  // const button = shallow(<button onClick={mockCallBack}>BOOL</button>);
  // button.find("button").simulate("click");
  // expect(mockCallBack.mock.calls.length).toEqual(1);

  // // simulate click is not working for Material UI Component
  // // const button = shallow(<Button></Button>);cd
  // // button.find("button").simulate("click");
  // // expect(mockCallBack.mock.calls.length).toEqual(1);

  // const cont = document.createElement("div");
  // ReactDOM.render(<BakeryBool />, cont);
  // console.log("TEST: BakeryBool TEXTcontent: ", cont.textContent);
  // expect(cont.textContent).toMatch("FALSE");

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
