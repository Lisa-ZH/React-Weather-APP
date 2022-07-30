import React from "react";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <div class="forecast">
        {data.list.splice(0, 4).map((item, idx) => (
          <div class="daily-item">
            <div class="date">{forecastDays[idx]}</div>
            <img 
            src={`icons/${item.weather[0].icon}.png`} 
            className="forecast-image" 
            alt="weather" />
            
            <div class="description">{item.weather[0].description}</div>
            <div class="max-min">{Math.round(item.main.temp_max)}°F /{Math.round(item.main.temp_min)}°F</div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
