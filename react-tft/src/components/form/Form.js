import React, { useState } from 'react';
import Input from '../input/Input.js';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import './Form.scss'
const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);
  const [isClearModalOpen, setClearModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitModalOpen(true);

  };

  const handleClear = (e) => {
    e.preventDefault(); 
    setClearModalOpen(true);
  };

  const handleClearModal = () => {
    setEmail('');
    setPassword('');
    setClearModalOpen(false)
    
  };

  const handleCloseSubmitModal = () => {
    setSubmitModalOpen(false); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="button-container">
          <Button type="submit">Submit</Button>
          <Button onClick={handleClear}>Clear</Button>
        </div>
      </form>
      <Modal
        isOpen={isSubmitModalOpen}
        message="Are you sure you want to submit?"
        buttonText={"Submit"}
        handleSubmit={handleCloseSubmitModal}
      />
      <Modal
        isOpen={isClearModalOpen}
        message="Are you sure you want to clear the form?"
        buttonText={"Clear"}
        handleSubmit={handleClearModal}
      />
    </div>
  );
};

export default Form;