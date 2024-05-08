import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../redux/actions/userActions';
import { Snackbar } from '@mui/material';

const StyledContainer = styled(Container)({
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  padding: '40px',
  marginTop: '80px',
});

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo && userInfo.message) {
      setSnackbarMessage(userInfo.message);
      setOpen(true);
    }
  }, [userInfo, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" sx={{ marginBottom: '20px' }}>
          Sign up
        </Typography>
        <form onSubmit={handleSignUp} noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
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
            disabled={loading}
            sx={{ marginTop: '20px' }}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
          {error && <Typography variant="body2" color="error" sx={{ marginTop: '10px' }}>{error}</Typography>}
          <Grid container justifyContent="flex-end" sx={{ marginTop: '20px' }}>
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        message={snackbarMessage? "User Registered Successfully! Please go to sign in page.": ''}
        onClose={handleClose}
      />
    </StyledContainer>
  );
};

export default SignUpForm;
