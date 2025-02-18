import React, { useState } from "react";
import "./contact-me.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const apiUrl = "https://weboum.com/email-api/";
  
    const emailData = {
      wxmail: "true",
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "cors", 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(emailData),
      });
  
      const text = await response.text();  // Read the response as text first
  
      let result;
      try {
        result = JSON.parse(text);  // Try parsing as JSON
      } catch (error) {
        throw new Error("Invalid JSON response from server.");
      }
  
      if (!response.ok) {
        throw new Error(`Server Error: ${result.message || response.status}`);
      }
  
      console.log("API Response:", result);
      setResponse("Message sent successfully!");
      setError(null);
      alert("Message sent successfully!");
    } catch (error) {
      setError(`Failed to send message. ${error.message}`);
    }
  };
  
  
  
  

  return (
    <section className="ftco-section ftco-no-pb" id="contactme">
      <div className="container-fluid-xl">
        <div className="rows no-gutters justify-content-center">
          <div className="col-md-12 m-3">
            <div className="wrapper">
              <div className="row g-0">
                <div className="col-lg-6 order-lg-last">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3>Contact Us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat.
                    </p>
                    <form
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              cols="30"
                              rows="4"
                              placeholder="Write your message here..."
                              value={formData.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn"
                              style={{
                                backgroundColor: "#271a0e",
                                color: "#fff",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    {response && <p style={{ color: "green" }}>{response}</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                  <div id="map" className="bg-white">
                    <img
                      src="depositphotos_321868246-stock-photo-young-latin-woman-in-customer.jpg"
                      alt="Contact"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

