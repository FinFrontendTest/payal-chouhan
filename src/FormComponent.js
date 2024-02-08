// FormComponent.js
import React, { useState } from 'react';
import styles from './FormComponent.module.css';

const FormComponent = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [weekday, setWeekday] = useState([]);
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleCheckboxChange = (day) => {
    setWeekday((prevWeekday) => {
      if (prevWeekday.includes(day)) {
        return prevWeekday.filter((d) => d !== day);
      } else {
        return [...prevWeekday, day];
      }
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!contact.trim()) {
      errors.contact = 'Contact is required';
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Invalid contact format';
    }

    if (weekday.length === 0) {
      errors.weekday = 'Select at least one weekday';
    }

    if (!dob.trim()) {
      errors.dob = 'Date of Birth is required';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = { name, email, contact, weekday, dob };
      onSubmit(formData);

      // Reset the form
      setName('');
      setEmail('');
      setContact('');
      setWeekday([]);
      setDob('');
    }
  };
  
  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Registration Form</h2>
      <div className={styles.formField}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {validationErrors.name && (
          <span className={styles.error}>{validationErrors.name}</span>
        )}
      </div>
      <div className={styles.formField}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {validationErrors.email && (
          <span className={styles.error}>{validationErrors.email}</span>
        )}
      </div>
      <div className={styles.formField}>
        <label htmlFor="contact">Contact:</label>
        <input
          type="number"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {validationErrors.contact && (
          <span className={styles.error}>{validationErrors.contact}</span>
        )}
      </div>
      <div className={styles.formField}>
        <label>Weekday:</label>
        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={weekday.includes('Monday')}
              onChange={() => handleCheckboxChange('Monday')}
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              checked={weekday.includes('Tuesday')}
              onChange={() => handleCheckboxChange('Tuesday')}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              checked={weekday.includes('Wednesday')}
              onChange={() => handleCheckboxChange('Wednesday')}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              checked={weekday.includes('Thursday')}
              onChange={() => handleCheckboxChange('Thursday')}
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              checked={weekday.includes('Friday')}
              onChange={() => handleCheckboxChange('Friday')}
            />
            Friday
          </label>
          
          {/* Add similar checkboxes for other weekdays */}
        </div>
        {validationErrors.weekday && (
          <span className={styles.error}>{validationErrors.weekday}</span>
        )}
      </div>
      <div className={styles.formField}>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        {validationErrors.dob && (
          <span className={styles.error}>{validationErrors.dob}</span>
        )}
      </div>
      <div className={styles.formField}>
        <label>Gender:</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={() => handleGenderChange('Male')}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={() => handleGenderChange('Female')}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Others"
              checked={gender === 'Others'}
              onChange={() => handleGenderChange('Others')}
            />
           Others
          </label>
          
          {/* Add more radio buttons for other gender options */}
        </div>
      </div>
      <div className={styles.formActions}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FormComponent;
