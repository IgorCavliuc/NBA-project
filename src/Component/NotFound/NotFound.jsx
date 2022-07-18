import React from "react";
import "./NotFound.css";
import NotFoundImg from "../../src/img/404.png";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFoundContent">
      <Link to="/profile" className="notFoundBlock">
        <img src={NotFoundImg}></img>
        <h1>Page not found</h1>
        <p>Sorry, we can't find what you're looking for</p>
      </Link>
    </div>
  );
}

export default NotFound;
