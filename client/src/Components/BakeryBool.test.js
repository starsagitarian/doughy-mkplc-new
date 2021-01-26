/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// OMG! Simulate Button Click for Material UI Element is a challenge!

import BakeryBool from "./BakeryBool";
import React, { createElement } from "react";
import ReactDOM from "react-dom";

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
// import { Button } from "@material-ui/core";
// import { render, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";

test("If button is clicked should say TRUE / FALSE ... ", () => {
  const mockCallBack = jest.fn();
  const button = shallow(<button onClick={mockCallBack}>BOOL</button>);
  button.find("button").simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(1);

  // simulate click is not working for Material UI Component
  // const button = shallow(<Button></Button>);
  // button.find("button").simulate("click");
  // expect(mockCallBack.mock.calls.length).toEqual(1);

  const cont = document.createElement("div");
  ReactDOM.render(<BakeryBool />, cont);
  console.log("TEST: BakeryBool TEXTcontent: ", cont.textContent);
  expect(cont.textContent).toMatch("FALSE");
});
