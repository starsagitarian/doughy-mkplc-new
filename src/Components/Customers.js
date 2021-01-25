import React, { useState, useEffect } from "react";
import getCustomers from "../ApiService.ts";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then((data) => setCustomers(data))
      .then(() => console.log("customers: ", customers));
  }, []);

  return (
    <div className='customers-container' style={{ margin: 60 }}>
      <h1>CUSTOMERS</h1>
      {customers.map((customer) => (
        <p key={customer.id} name={customer.name}>
          {customer.name}
        </p>
      ))}
    </div>
  );
}

export default Customers;
