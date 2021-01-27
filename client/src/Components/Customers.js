import React, { useState, useEffect } from "react";
import getCustomers from "../ApiService.ts";
import CustomersList from "./CustomersList";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState("Show");
  useEffect(() => {
    getCustomers()
      .then((data) => setCustomers(data))
      .then(() => console.log("customers: ", customers));
  }, []);

  return (
    <div className='customers-container' style={{ margin: 60 }}>
      <h1>CUSTOMERS</h1>
      <button
        style={{ background: "darkgreen", color: "whitesmoke" }}
        onClick={() => {
          setShowCustomers("Hide");
        }}
      >
        {showCustomers}
      </button>
      {showCustomers === "Hide" && (
        <CustomersList customers={customers}></CustomersList>
      )}
    </div>
  );
}

export default Customers;
