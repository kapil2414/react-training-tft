import React, { useState } from 'react';
import WeatherHoc from '../../components/weather/WeatherHoc';
import { TextField, Button, Typography, CircularProgress, Grid, Paper } from '@mui/material';

const WeatherData = ({ temperature, description, windSpeed, pressure, humidity, loading, error, updateLocation, city }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    updateLocation(location);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom align="center">Weather App</Typography>
          <Typography variant="h5" gutterBottom align="center">Enter the name of Country/Region/City</Typography>
          <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} fullWidth />
          <Button variant="contained" onClick={handleSearch} fullWidth style={{ marginTop: '10px' }}>Search</Button>
          
          {loading && <CircularProgress style={{ marginTop: '20px' }} />}
          {error && (
            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
              <Typography variant="body1" style={{ color: 'red' }}>Data not available</Typography>
            </div>
          )}
          {!error && temperature && description && (
            <div style={{ marginTop: '20px' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1">City/Region/Country:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{city}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Temperature:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{temperature}°C</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Description:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{description}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Wind Speed:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{windSpeed} m/s</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Pressure:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{pressure} hPa</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Humidity:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{humidity}%</Typography>
                </Grid>
              </Grid>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default WeatherHoc(WeatherData);
