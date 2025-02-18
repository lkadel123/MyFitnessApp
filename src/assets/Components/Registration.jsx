import React, { useState } from "react";
import "./Registration.css";

const RegistrationForm = ({ isVisible, onClose, formType = "registration" }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    course: "",
    password: "",
  });

  const [message, setMessage] = useState(""); // For handling form submission messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;

    // Add your validation logic here
    if (!formData.username.trim() || !formData.email || !formData.phone || !formData.city || !formData.course || !formData.password) {
      setMessage("Please fill out all fields.");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Create a detailed message with all form data
    const detailedMessage = `
      Name: ${formData.username}
      Email: ${formData.email}
      Phone: ${formData.phone}
      City: ${formData.city}
      Course: ${formData.course}
      Password: ${formData.password}
    `;

    const emailData = {
      wxmail: "true",  // Custom field for the API
      email: formData.email,
      subject: `Registration for ${formData.course}`,  // You can customize the subject
      message: detailedMessage,  // Pass all form data here as message
    };

    // Sending data to the API
    const apiUrl = "https://weboum.com/email-api/";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage("Registration successful! Check your email.");
        // Reset form data after successful submission
        setFormData({
          username: "",
          email: "",
          phone: "",
          city: "",
          course: "",
          password: "",
        });
      })
      .catch((error) => {
        setMessage("Failed to send registration details.");
        console.error("API Error:", error);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h3>Registration Form</h3>
        {message && <p>{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Course</option>
            <option value="Indian Army Training">Indian Army Training</option>
            <option value="Indian Air Force Training">Indian Air Force Training</option>
            <option value="Indian Navy Training">Indian Navy Training</option>
            <option value="Self Defence Training">Self Defence Training</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;



