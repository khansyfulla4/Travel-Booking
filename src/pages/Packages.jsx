import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function Packages() {
  return (
    <div className="packages-page">
      <div className="overlay">
        <h1>Travel Packages</h1>

        <div className="package-links">
          <Link to="domestic">Domestic</Link>
          <Link to="international">International</Link>
          <Link to="adventure">Adventure</Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
