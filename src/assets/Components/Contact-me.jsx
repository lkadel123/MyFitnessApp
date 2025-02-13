import React, { useState } from "react";
import emailjs from "emailjs-com";
import './contact-me.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    userName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dmsasul",  // Replace with your EmailJS Service ID
        "template_hcogpso", // Replace with your EmailJS Template ID
        {
          user_name: formData.userName,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "ukjgFhN6n0uAvyVst"  // Replace with your EmailJS Public Key
      )
      .then((res) => {
        setResponse("Message sent successfully!");
        alert("Message sent successfully!");
      })
      .catch((error) => {
        setError("Failed to send message.");
        console.error(error);
      });

    setFormData({
      userName: "",
      email: "",
      subject: "",
      message: "",
    });
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
                    <h3>Contact us</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <form
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="userName"
                              placeholder="Name"
                              value={formData.userName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
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
                              placeholder="Create a message here"
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
                      alt=""
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

