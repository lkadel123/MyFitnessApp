import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Councling.css";

const CounsellingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.course) {
      setMessage("Please fill out all fields.");
      return;
    }

    // Prepare the data to be sent to EmailJS
    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_course: formData.course,
      user_city: formData.city,
      form_type: "counselling",  // Pass form type here
    };

    // Send form data to EmailJS
    emailjs
      .send(
        "service_dmsasul",  // Your EmailJS Service ID
        "template_tm1rr1o",  // Your EmailJS Template ID
        emailData,  // Form data to send to the template
        "ukjgFhN6n0uAvyVst"  // Your EmailJS User ID
      )
      .then(
        (result) => {
          setMessage("Your form has been submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            city: "",
          });
        },
        (error) => {
          setMessage("There was an error sending the form.");
          console.error("EmailJS Error: ", error.text);  // Log the error response
        }
      );
  };

  return (
    <section className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default" style={{ margin: "0" }}>
      <div className="elementor-container gap-3 d-flex">
        {/* Left Column */}
        <div className="elementor-column elementor-col-50 elementor-top-column">
          <div className="elementor-widget-wrap" style={{ width: "100%" }}>
            {/* Heading */}
            <div className="elementor-widget elementor-widget-elementskit-heading">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left">
                    <p className="ekit-heading--title elementskit-section-title">
                      Get Free Counselling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="elementor-widget elementor-widget-eael-wpforms">
              <div className="elementor-widget-container">
                <div className="eael-contact-form eael-wpforms eael-contact-form-align-default">
                  <form className="wpforms-form" onSubmit={handleSubmit}>
                    <div className="wpforms-field-container">
                      {/* Name Field */}
                      <div className="wpforms-field">
                        <input
                          type="text"
                          className="wpforms-field-large"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Email Field */}
                      <div className="wpforms-field">
                        <input
                          type="email"
                          className="wpforms-field-large"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="wpforms-field">
                        <input
                          type="number"
                          className="wpforms-field-large"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      {/* Select Course */}
                      <div className="wpforms-field">
                        <select
                          className="wpforms-field-large"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select Course</option>
                          <option value="NDA Foundation">Indian Army Training</option>
                          <option value="Boarding School">Indian Air Force Training</option>
                          <option value="NDA Coaching Girls">Indian Navy Training</option>
                          <option value="NDA After 12th">Self Defence Training</option>
                        </select>
                      </div>

                      {/* City Field */}
                      <div className="wpforms-field">
                        <input
                          type="text"
                          className="wpforms-field-large"
                          name="city"
                          placeholder="Your City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="wpforms-submit-container">
                      <button type="submit" className="wpforms-submit">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                  {message && <p className="form-message">{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="elementor-column elementor-col-50 elementor-top-column img-container">
          <div className="elementor-widget-wrap">
            <div className="elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img
                  src="https://indiandefenceacademy.in/wp-content/uploads/2025/01/13-01-2025-wesite-banner-2-copy-1.webp"
                  alt="Counselling Banner"
                  className="attachment-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingSection;




