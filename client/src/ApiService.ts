/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* 
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
Next, rename any file to be a TypeScript file (e.g. src/index.js to src/index.tsx) and restart your development server!
*/

/*
Cool thing! ES7 React/Redux/GraphQL/React-Native snippets
*/

import axios from "axios";

export default async function getUsers() {

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("TS customers from api: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
