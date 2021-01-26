import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="list-unstyled">
              Doughy - The Breadlist App
            </h1>
            <h4>Created By - Adrian De Felice - for CodeWorks</h4>
          </div>
          <div className="col">
            <h4>Rework and additional designing by:</h4>
            <ol className="list-unstyled">
              <li>Connor MacPhee</li>
              <li>Wladimir Abdulayev</li>
              <li>Baiju Joseph</li>
            </ol>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;