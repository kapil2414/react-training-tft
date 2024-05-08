import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

const Home = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Grid container justifyContent="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12} sm={6} md={4}>
        <div style={{ textAlign: 'center' }}>
          <h1>Home</h1>
          {userInfo ? (
            <Link to="/employee">Go to Employee Section</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <span> | </span>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
