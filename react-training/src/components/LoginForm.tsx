/** @format */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import InputText from './InputText';
import { loginValidation } from '../utils/formValidation';
import './styles.css';

const LoginForm = () => {
  const [errors, setErrors] = useState({ username: '', password: '' });

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  console.log('form login ');
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const usernameValue = usernameRef.current?.value || '';
    const passwordValue = passwordRef.current?.value || '';
    let newErrors = loginValidation(usernameValue, passwordValue);
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      console.log('Form submitted:', {
        username: usernameValue,
        password: passwordValue,
      });
    }
  }, []); //

  return (
    <form className='form' onSubmit={handleSubmit}>
      <InputText label='Username' ref={usernameRef} error={errors.username} />
      <InputText
        label='Password'
        type='password'
        ref={passwordRef}
        error={errors.password}
      />

      <button className='submit-btn' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
// Homework
// 1. onChange InputText
// 2. onSubmit: ref: username + password
// 3. validation: pressing onSubmit
// - empty: error: username/password is not empty
// - email: email is not correct
