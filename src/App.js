import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('London');
    const [error, setError] = useState(null); 
    const apiKey = '4c65f901e41fedce6b7bf04b1ed093da'; 

    const fetchWeather = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            if (!response.ok) {
                throw new Error('City not found');
            }

            const data = await response.json();
            setWeatherData(data);
            setError(null); 
        } catch (error) {
            setWeatherData(null);
            setError(error.message); 
        }
    };

    useEffect(() => {
        if (city && city.length > 1) {
            fetchWeather(city);
        } else {
            setWeatherData(null);
            setError("Please enter a valid city name."); 
        }
    }, [city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="app">
            <Header />
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter city"
                className="city-input"
            />
            {error && <p className="error-message">{error}</p>} {}
            <Weather weatherData={weatherData} />
        </div>
    );
}

export default App;
