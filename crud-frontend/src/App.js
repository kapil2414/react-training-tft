// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Employee from './pages/employee/Employee';
import { generateToken, messaging } from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload)=>{
      console.log(payload)
      toast(payload.notification.body)
    })
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/employee' element={<Employee />} />
      </Routes>
      <Toaster position='top-right'/>
    </>

  );
};

{/* <Routes>
        <Route path={PAGE_ROUTES.HOME} element={<Home />} />
        <Route path={PAGE_ROUTES.LOGIN} element={<Login />} />
        <Route path={PAGE_ROUTES.WEATHER} element={<WeatherData />} />
          <Route element={<Authenticated />}>
          <Route path={PAGE_ROUTES.ABOUT} element={<About />} />
          <Route path={PAGE_ROUTES.GITHUBPROFILE} element={<UserProfile />} />
          </Route>
      </Routes> */}

export default App;
