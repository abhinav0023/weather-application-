import React from "react";
import { RiEdgeNewFill } from "react-icons/ri";

function Forecast() {
  const data = [1,2,3,4,5]

  return (
    <>
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase">3 Hour step forecast</p>
        </div>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          {data.map((data, index) => (
            <div
              key={index}
              className="felx flex-col items-center justify-center"
            >
              <p className="font-light text-sm">Wed</p>
              <RiEdgeNewFill/>
              <p className="font-medium">12°</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Forecast;
