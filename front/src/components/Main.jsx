import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    
    <div className="container mt-5">
      <h1 className="text-center">Menú random CRUDS</h1>
      <div className="container mt-5" >
        <Link to="/apifake" className="link">
          Api Fake
        </Link>
        <br />
        <Link to="/games" className="link">
          Games

        </Link>
        <br />
        <Link to="/employees" className="link">
          Employees
        </Link>
      </div>
    </div>
  );
};


export default Main;

