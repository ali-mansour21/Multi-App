import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Header from "../../components/Header";
import Current from "./components/Current";
import Next from "./components/Next";
import axios from "axios";
const Index = () => {
  const [currentData, setCurrentData] = useState();
  const [nextData, setNextData] = useState();
  const [ApparentTemperatureMaxData, setApparentMaxData] = useState([]);
  const [ApparentTemperatureMinData, setApparentMinData] = useState([]);
  const [temperatureMaxData, setTemperatureMaxData] = useState([]);
  const [temperatureMinData, setTemperatureMinData] = useState([]);
  const [time, setTime] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=33.851333&longitude=35.497472&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,pressure_msl,surface_pressure,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&start_date=2024-03-27&end_date=2024-03-30"
      );

      const apparent_temperature_max =
        response.data.daily.apparent_temperature_max;
      const apparent_temperature_min =
        response.data.daily.apparent_temperature_min;
      const temperature_2m_max = response.data.daily.temperature_2m_max;
      const temperature_2m_min = response.data.daily.temperature_2m_min;
      const time = response.data.daily.time;

      const result = [];

      for (let i = 0; i < 4; i++) {
        const obj = {
          apparent_temperature_max: apparent_temperature_max[i],
          apparent_temperature_min: apparent_temperature_min[i],
          temperature_2m_max: temperature_2m_max[i],
          temperature_2m_min: temperature_2m_min[i],
          time: time[i],
        };
        result.push(obj);
      }
      setNextData(result);
      setCurrentData(response.data.current);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Current data={currentData} />
        {nextData?.map((day, i) => (
          <Next key={i} data={day} />
        ))}
      </div>
    </>
  );
};

export default Index;
