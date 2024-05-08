import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Employee from './pages/employee/Employee';
import Payment from './pages/payment/Payment'
import { generateToken, messaging } from './notifications/firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import PaymentCancel from './pages/payment/PaymentCancel';

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
        <Route path='/payment' element={<Payment />} />
        <Route path='/payment/success' element={<PaymentSuccess />} />
        <Route path='/payment/cancel' element={<PaymentCancel />} />
      </Routes>
      <Toaster position='top-right'/>
    </>

  );
};

export default App;
