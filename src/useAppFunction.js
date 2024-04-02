import { useState } from 'react';

function useAppFunction() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      formSuccess(email);
    } else {
      setIsEmailValid(false);
    }
  };

  const formSuccess = (email) => {
    setIsSuccess(true);
    setEmail(email);
    setIsEmailValid(true);
  };

  const dismissMessage = () => {
    setIsSuccess(false);
  };

  const validateEmail = (email) => {
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailregex.test(email);
  };

  return {
    isSuccess,
    email,
    isEmailValid,
    handleFormSubmit,
    dismissMessage
  };
}

export default useAppFunction;
