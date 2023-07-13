import React from "react";
import { Products } from "./Products";

const Buttons = ({ setItem, ecommereProducts }) => {
    return (
      <>
        <div className="d-flex justify-content-center">
          {ecommereProducts.map((Val, id) => {
            return (
              <button
                className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                key={id}
              >
                {Val}
              </button>
            );
          })}
          <button
            className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
            onClick={() => setItem(Data)}
          >
            All
          </button>
         </div>
         </>
  );
};
 
export default Buttons;