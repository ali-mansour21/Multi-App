import React from "react";

const Current = ({ data }) => {
  const formatDateToISODate = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const isoDateString = `${year}-${month}-${day}`;

    return isoDateString;
  };

  return (
    <div className="current">
      <div className="right">
        <h3>{data?.temperature_2m}&deg;C</h3>
        <p>{formatDateToISODate(data?.time)}</p>
      </div>
      <div className="left">
        <div className="box">
          <h4>Wind</h4>
          <p>{data?.wind_speed_10m} Km/h</p>
        </div>
        <div className="box">
          <h4>Feels like</h4>
          <p>{data?.apparent_temperature} &deg;C </p>
        </div>
        <div className="box">
          <h4>Relative humidity</h4>
          <p>{data?.relative_humidity_2m} %</p>
        </div>
        <div className="box">
          <h4>Surface pressure</h4>
          <p>{data?.surface_pressure} hPa</p>
        </div>
        <div className="box">
          <h4>Precipitation</h4>
          <p>{data?.precipitation} mm</p>
        </div>
        <div className="box">
          <h4>Sealevel Pressure</h4>
          <p>{data?.pressure_msl} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
