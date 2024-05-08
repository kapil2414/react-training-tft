import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherHoc = (WrappedComponent) => {
    const WeatherHoc = ({ ...props }) => {
        const [weatherData, setWeatherData] = useState({});
        const [location, setLocation] = useState('')
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        const updateLocation = (newLocation) => {
            setLocation(newLocation);
        };

        const fetchData = async (lat, long) => {
            setError(null)
            let url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = '2b9d959dc61d66218d0c5194a0f3f24f';
            let params;
            if (lat && long) {
                params = {
                    lat: lat,
                    lon: long,
                    units: 'metric',
                    appid: api_key,
                }
            } else {
                params = {
                    q: location,
                    units: 'metric',
                    appid: api_key,
                }
            }
            try {
                const response = await axios.get(url, { params: params });
                setWeatherData(response.data);
                setLoading(false)
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        useEffect(() => {
            if (location !== '') {
                fetchData();
            }
        }, [location]);

        useEffect(() => {

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchData(latitude, longitude);
                },
                (error) => {
                    setError(error.message);
                    setLoading(false);
                }
            );
        }, []);
        return (
          <WrappedComponent 
            {...props} 
            temperature={weatherData.main?.temp} 
            description={weatherData.weather?.[0]?.description} 
            windSpeed={weatherData.wind?.speed}
            pressure={weatherData.main?.pressure}
            humidity={weatherData.main?.humidity}
            city={weatherData.name}
            loading={loading} 
            error={error} 
            updateLocation={updateLocation} 
          />
        );
    };

    return WeatherHoc;
};

export default WeatherHoc;
