/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import mockAxios from "axios";
import ApiService from "./ApiService";

// https://www.youtube.com/watch?v=9Yrd4aZkse8
// https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions

it("should call axios and return users", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: [
        { id: 1, name: "First Tester" },
        { id: 2, name: "Second Tester" },
      ],
    })
  );

  // work
  const users = await ApiService();
  console.log("TEST: Users: ", users);

  // assertions / expects
  expect(users).toEqual([
    { id: 1, name: "First Tester" },
    { id: 2, name: "Second Tester" },
  ]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
});
