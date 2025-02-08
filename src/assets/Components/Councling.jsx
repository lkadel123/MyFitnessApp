import React from "react";
import "./Councling.css";

const CounsellingSection = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default" style={{margin: "0c"}}>
      <div className="elementor-container gap-3 d-flex">
        {/* Left Column */}
        <div className="elementor-column elementor-col-50 elementor-top-column">
          <div className="elementor-widget-wrap" style={{width: "100%"}}>
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
                  <form className="wpforms-form" method="post" action="/">
                    <div className="wpforms-field-container">
                      {/* Name Field */}
                      <div className="wpforms-field">
                        <input
                          type="text"
                          className="wpforms-field-large"
                          name="name"
                          placeholder="Name"
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
                          required
                        />
                      </div>
                      {/* Select Course */}
                      <div className="wpforms-field">
                        <select className="wpforms-field-large" name="course" required>
                          <option value="" disabled selected>
                            Select Course
                          </option>
                          <option value="NDA Foundation">Indian Army Training</option>
                          <option value="Boarding School">Indian Air Force Training</option>
                          <option value="NDA Coaching Girls">Indian Navy Training</option>
                          <option value="NDA After 12th">Self Defance Training</option>
                        </select>
                      </div>
                      {/* City Field */}
                      <div className="wpforms-field">
                        <input
                          type="text"
                          className="wpforms-field-large"
                          name="city"
                          placeholder="Your City"
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
