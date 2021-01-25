/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
require("dotenv").config();

export default async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("JS customers from api: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
