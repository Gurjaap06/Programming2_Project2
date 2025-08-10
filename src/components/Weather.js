import React from "react";

function Weather({ weatherData }) {
  return (
    <div className="weather-container">
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default Weather;
