import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { googleLogin, login } from '../../redux/actions/userActions';
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";
const StyledContainer = styled(Container)({
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  padding: '40px',
  marginTop: '80px',
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo ) {
      navigate("/employee");
    }
  }, [userInfo, navigate]);

  //   if (!username.trim() || !password.trim()) {
  //     setError('Please enter both username and password.');
  //     return;
  //   }

  //   // Implement email validation
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(username)) {
  //     setError('Please enter a valid email address.');
  //     return;
  //   }


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}>
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="Email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ marginTop: '20px' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
          </Button>
          {error && (
            <Typography variant="body2" color="error" sx={{ marginTop: '10px' }}>
              {error}
            </Typography>
          )}
          <Grid container justifyContent="space-between" alignItems="center" sx={{ marginTop: '20px' }}>
            <Grid item>
              <Link href="/register" variant="body2">
                Register Here?
              </Link>
            </Grid>

          </Grid>

          <Grid container justifyContent="space-between" alignItems="center" sx={{ marginTop: '20px' }}>
            <GoogleLogin
              onSuccess={(response) => {
                const { credential } = response;
                const decodedToken = jwtDecode(credential);
                const name = decodedToken.name;
                dispatch(googleLogin(name));

              }}
              onError={() => {
                console.log('login failed')
              }}
            />
          </Grid>
        </form>
      </div>
    </StyledContainer>
  );
};

export default LoginForm;
