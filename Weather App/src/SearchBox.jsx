import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {


    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(false);

    const getWeatherData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            const data = await response.json();
            let result = {
                city: cityName,
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                description: data.weather[0].description
            }
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    function capitalizeFirstLetter(string) {
        if (!string) return ''; // Check if the string is empty or null
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleChange = (event) => {
        let cityName = event.target.value;
        cityName = capitalizeFirstLetter(cityName); // Capitalize the first letter of the city name
        setCityName(cityName);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(`Fetching weather data for ${cityName}`);
            let newInfo = await getWeatherData();
            updateInfo(newInfo);
            setCityName(''); 
            setError(false);
        } catch (e) { 
            setError(true);
        }
    };

    return (
        <div className='search-box'>
            <h2 className='search-title'>Search For the Weather</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={cityName} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" endIcon={<SearchIcon />} type="submit" className='search-btn'>
            Search
            </Button>
            </form>
            <br></br>
            {error && <p style={{ color: 'red' }}>No such place exists!</p>}
        </div>
        
    );
}