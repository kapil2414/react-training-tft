import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, required }) => {
  return (
<div className="container">
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
    </div>
  );
};

export default Input;

Input.propTypes = {
  required: PropTypes.bool
};