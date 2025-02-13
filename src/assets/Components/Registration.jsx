import React, { useReducer } from "react";
import emailjs from "emailjs-com";
import "./Registration.css";

const initialState = {
  username: "",
  email: "",
  phone: "",
  city: "",
  course: "",
  password: "",
  success: null,
  error: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_COURSE":
      return { ...state, course: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SUBMIT_SUCCESS":
      return { ...initialState, success: "Registration successful! Check your email." };
    case "SUBMIT_ERROR":
      return { ...state, error: action.payload, success: null };
    default:
      return state;
  }
}

const RegistrationForm = ({ isVisible, onClose, formType = "registration" }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.username || !state.email || !state.phone || !state.city || !state.course || !state.password) {
      dispatch({ type: "SUBMIT_ERROR", payload: "Please fill out all fields." });
      return;
    }

    if (!isValidEmail(state.email)) {
      dispatch({ type: "SUBMIT_ERROR", payload: "Please enter a valid email." });
      return;
    }

    if (!isValidPhone(state.phone)) {
      dispatch({ type: "SUBMIT_ERROR", payload: "Please enter a valid phone number." });
      return;
    }

    // Prepare the data to be sent to EmailJS
    const emailData = {
      user_name: state.username,
      user_email: state.email,
      user_phone: state.phone,
      user_city: state.city,
      user_course: state.course,
      user_password: state.password,
      form_type: formType,  // Pass the dynamic formType
    };

    emailjs
      .send(
        "service_dmsasul", // Replace with your EmailJS Service ID
        "template_tm1rr1o", // Replace with your EmailJS Template ID
        emailData,
        "ukjgFhN6n0uAvyVst" // Replace with your EmailJS Public Key
      )
      .then(() => {
        dispatch({ type: "SUBMIT_SUCCESS" });
      })
      .catch((error) => {
        dispatch({ type: "SUBMIT_ERROR", payload: "Failed to send registration details." });
        console.error(error);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h3>Registration Form</h3>

        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state.success && <p style={{ color: "green" }}>{state.success}</p>}

        <form onSubmit={handleSubmit} formType={formType}>
          <input
            type="text"
            placeholder="Full Name"
            value={state.username}
            onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={state.email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
            required
          />
          <select
            className="wpforms-field-large"
            name="course"
            value={state.course}
            onChange={(e) => dispatch({ type: "SET_COURSE", payload: e.target.value })}
            required
          >
            <option value="" disabled>
              Select Course
            </option>
            <option value="Indian Army Training">Indian Army Training</option>
            <option value="Indian Air Force Training">Indian Air Force Training</option>
            <option value="Indian Navy Training">Indian Navy Training</option>
            <option value="Self Defence Training">Self Defence Training</option>
          </select>
          <input
            type="text"
            className="wpforms-field-large"
            name="city"
            placeholder="Your City"
            value={state.city}
            onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={state.phone}
            onChange={(e) => dispatch({ type: "SET_PHONE", payload: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
            required
          />
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;


