import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Details() {
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: "22°",
    },
    {
      id: 1,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: "30%",
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: "11km/hr",
    },
  ];
  const HorizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: "05:20 AM",
    },
    {
      id: 1,
      Icon: GiSunset,
      title: "Sunset",
      value: "07:00PM",
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: "45°",
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: "25°",
    },
  ];

  return (
    <>
      <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
          <p>Rain</p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
          <img
            src="http://openweather.org/img/wn/01d@2x.png"
            alt="weather icon"
            className="w-20"
          />
          <p className="text-5xl">34°</p>
          <div className="flex flex-col space-y-3 items-start">
            {verticalDetails.map(({ id, Icon, title, value }) => (
              <div
                key={id}
                className="flex font-light text-sm items-center justify-center"
              >
                <Icon size={18} className="mr-1" />
                {`${title}`}{" "}
                <span className="font-medium ml-1">{`${value}`}</span>
              </div>
            ))}
          </div>
        </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
                {HorizontalDetails.map(({id, Icon, title, value})=> (
                    <div key={id} className="flex flow-row items-center">
                        <Icon size={30}/>
                        <p className="font-light ml-1">
                            {`${title}: `}
                            <span className="font-medium ml-1">{value}</span>
                        </p>
                    </div>
                ))}
            </div>

      </div>
    </>
  );
}

export default Details;
