import React from "react";

const Next = ({ data }) => {
  console.log(data);
  return (
    <div className="next">
      <div className="box">
        <h4>Max temperature</h4>
        <p>{data?.temperature_2m_max} &deg;C</p>
      </div>
      <div className="box">
        <h4>Min temperature</h4>
        <p>{data?.temperature_2m_min} &deg;C</p>
      </div>
      <div className="box">
        <h4>Max Feels like</h4>
        <p>{data?.apparent_temperature_max} &deg;C</p>
      </div>
      <div className="box">
        <h4>Min Feels like</h4>
        <p>{data?.apparent_temperature_min} &deg;C</p>
      </div>
      <div className="date">
        <p>{data?.time}</p>
      </div>
    </div>
  );
};

export default Next;
