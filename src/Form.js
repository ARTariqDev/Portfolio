import React, { useState } from 'react';
import styles from './Form.css';

const ContactForm = () => {
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    const name = event.target.value;
    setNameValid(name.trim() !== '');
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailValid(email.trim() !== '' && isValidEmail);
  };

  const handleMessageChange = (event) => {
    const message = event.target.value;
    setMessageValid(message.trim().length >= 25);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nameValid || !emailValid || !messageValid) {
      setErrorMessage('Please fill in all required fields!');
      return;
    }

    setErrorMessage('');

    const subject = event.target.elements.subject.value;
    const name = event.target.elements.name.value;
    const message = event.target.elements.message.value;
    const mailtoLink = `mailto:ddrd7718@gmail.com?subject=${subject}&body=${message}%0A%0AFrom: ${name}`;
    window.open(mailtoLink, '_blank');
    alert('Your enquiry has been submitted! Please check your email client.');
  };

  return (
    <div className="contact-form">
      <h2>Contact Form</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Enter your enquiry subject"
          required
        />
        <br />

        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
          onChange={handleNameChange}
          onBlur={handleNameChange}
          className={!nameValid ? styles.invalid : ''}
        />
        {!nameValid && <p className="error-message">Required</p>}
        <br />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
          onChange={handleEmailChange}
          onBlur={handleEmailChange}
          className={!emailValid ? styles.invalid : ''}
        />
        {!emailValid && <p className="error-message">Invalid email address</p>}
        <br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          placeholder="Write your message here"
          required
          onChange={handleMessageChange}
          onBlur={handleMessageChange}
          className={!messageValid ? styles.invalid : ''}
        />
        {!messageValid && <p className="error-message">Must be at least 25 characters</p>}
        <br />

        <button type="submit">Compose Email</button>
      </form>
    </div>
  );
};

export default ContactForm;
