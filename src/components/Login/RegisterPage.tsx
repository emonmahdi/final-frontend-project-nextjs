"use client";
import React, { useState } from "react";

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    termsAndConditions: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can handle the registration logic using the formData.
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email:</label>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="termsAndConditions"
            name="termsAndConditions"
            checked={formData.termsAndConditions}
            onChange={handleChange}
          />
          <label htmlFor="termsAndConditions">
            I agree to the <a href="/privacy-policy">Terms and Conditions</a>
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
