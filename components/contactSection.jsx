import React, { useState } from 'react';
import './styles/contactSection.css'; // Import the CSS file for styling

    const ContactSection = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [nameError, setNameError] = useState('');
        const [emailError, setEmailError] = useState('');
        const [messageError, setMessageError] = useState('');
      
        const validateForm = () => {
          let isValid = true;
      
          if (name.trim() === '') {
            setNameError('Please enter your name');
            isValid = false;
          } else {
            setNameError('');
          }
      
          if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
          } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
          } else {
            setEmailError('');
          }
      
          if (message.trim() === '') {
            setMessageError('Please enter a message');
            isValid = false;
          } else {
            setMessageError('');
          }
      
          return isValid;
        };
      
        const isValidEmail = (email) => {
          // Simple email validation regex
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (validateForm()) {
            // Submit form logic goes here
            console.log('Form submitted!');
          }
        };
      
        return (
          <div className="contact-section">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name" className="input-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <span className="error-message">{nameError}</span>}
              </div>
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span className="error-message">{emailError}</span>}
              </div>
         
            </form>

            <div className="input-group">
                <label htmlFor="message" className="input-label">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="message-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError && (
                  <span className="error-message">{messageError}</span>
                )}
              </div>
              <button type="submit" className="send-button">
                Send
              </button>
          </div>
        );
      };

export default ContactSection;
