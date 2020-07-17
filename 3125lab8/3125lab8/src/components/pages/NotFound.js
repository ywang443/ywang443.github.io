import React from "react";

export default function NotFound() {
  return (
    <div className="container">
      <div className="h-200 d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-2 font-weight-bold">Error - 404</h1>
          <p className="lead text-center bg-dark text-light mt-3 py-2">
            PAGE NOT FOUND
          </p>
        </div>
      </div>
    </div>
  );
}
