import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState, useEffect } from 'react';

export default function WeatherApp() {

    let [weatherInfo, setweatherInfo] = useState({});

    let updateInfo = (result) => {
        setweatherInfo(result);
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cityName = "Delhi";
                const response = await fetch(`${import.meta.env.VITE_API_URL}?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
                const data = await response.json();
                updateInfo({
                    city: cityName,
                    temp: data.main.temp,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    humidity: data.main.humidity,
                    wind_speed: data.wind.speed,
                    description: data.weather[0].description
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        fetchData();
    },[]);

    return( 
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}