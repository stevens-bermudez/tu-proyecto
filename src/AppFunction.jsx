import { useState } from 'react';
import useAppFunction from './useAppFunction.js';  

function AppFunction() {
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

  return (
    <div className={`container${isSuccess ? ' success' : ''}`}>
      <div className={`left${isSuccess ? ' hidden' : ''}`}>
        <div className="left-info">
          <h1>stay updated</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>product discovery and building that matters</li>
            <li>measuring to ensure updates are a success</li>
            <li>and much more</li>
          </ul>
        </div>
        <form id="form" onSubmit={handleFormSubmit}>
          <div className="form-item">
            <label htmlFor="email">
              <p>Email address</p>
              {isEmailValid ? null : <p id="invalid-email" className="invalid-email active">Valid Email required</p>}
            </label>
            <input type="email" name="email" id="email" placeholder="email@company.com" className={isEmailValid ? '' : 'active'} />
          </div>
          <div className="form-item">
            <button id="submit-btn" type="submit">Subscribe to monthly Newsletter</button>
          </div>
        </form>
      </div>
      <div className={`right${isSuccess ? ' hidden' : ''}`}>
        <picture>
          <source media="(max-width: 768px)" srcSet="assets/images/illustration-sign-up-mobile.svg" />
          <img src="assets/images/illustration-sign-up-desktop.svg" alt="" />
        </picture>
      </div>
      <div className={`confirmed-message${isSuccess ? ' active' : ''}`}>
        <img src="assets/images/icon-success.svg" alt="" />
        <h2>Thanks for subscribing</h2>
        <p>A confirmation email has been sent to <span id="user-email">{email}</span>. Please open it and click the button inside to confirm your subscription</p>
        <button id="dismiss-message" onClick={dismissMessage}>Dismiss message</button>
      </div>
    </div>
  );
}

export default AppFunction;
