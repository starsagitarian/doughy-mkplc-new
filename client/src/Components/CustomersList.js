/* eslint-disable react/prop-types */
import React from "react";

function CustomersList({ customers }) {
  return (
    <div>
      {customers.map((customer) => (
        <p key={customer.id} name={customer.name}>
          [Customer:{customer.id}] :{customer.name}
        </p>
      ))}
    </div>
  );
}

export default CustomersList;
