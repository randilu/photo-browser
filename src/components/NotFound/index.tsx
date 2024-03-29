import React from "react";
import Header from "../Header";
import "./styles.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <Header title="Not Found" />
      <div className="not-found-container">
        <p className="not-found-label">
          404: Oops! The page you are looking for was not found.
        </p>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
