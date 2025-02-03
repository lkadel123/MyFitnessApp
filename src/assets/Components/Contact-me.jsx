import React, { useState } from "react";
import axios from "axios";
import MyMapComponent from "./google-map";
import './contact-me.css'

const ContactSection = () => {

  const [formData, SetFormData]= useState({
    userName : "",
    email : "",
    subject: "",
    message :""
  });

  const [response,setResponse] = useState(null);
  const [error, SetError]= useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };


  const handelSubmit=(e)=>{
    e.preventDefault();

   axios
   .post("https://localhost:7276/api/ContactForm", formData)
   .then((res) => {
     console.log("Success:", res.data);
     alert(res.message);
   })
    .catch((error)=>SetError(error.Message))
  


  SetFormData({
    userName: '',
    email: '',
    subject: '',
    message: ''
  });
  };

  return (
    <section className="ftco-section ftco-no-pb" id="contactme">
      <div className="container-fluid-xl">
        <div className="row no-gutters justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row g-0">
                <div className="col-lg-6 order-lg-last">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3>Contact us</h3>
                    <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                    <div className="row mb-4">
                      <div className="col-md-4">
                        <div className="dbox w-100 d-flex align-items-start">
                          <div className="text">
                            <p>
                              <span>My Address:</span> Dhangadhi-16 Rampur,Kailali(Nepal)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="dbox w-100 d-flex align-items-start">
                          <div className="text">
                            <p>
                              <span>My Email:</span>{" "}
                              <a href="lkadel1999@gmail.com">lkadel1999@gmail.com</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="dbox w-100 d-flex align-items-start">
                          <div className="text">
                            <p>
                              <span>My Phone:</span>{" "}
                              <a href="tel://1234567920">+977 9868710810</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form id="contactForm" name="contactForm" className="contactForm" onSubmit={handelSubmit}>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="userName"
                              id="userName"
                              placeholder="Name"
                              value={formData.userName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="Subject"
                              placeholder="Subject"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Create a message here"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-dark"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    {response && <p>Success: {JSON.stringify(response)}</p>}
                    {error && <p>Error: {error}</p>}
                    <div className="w-100 social-media mt-5">
                      <h3>Follow me here</h3>
                      <p>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Dribbble</a>
                      </p>
                    </div>
                  
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                  <div id="map" className="bg-white">
                    <MyMapComponent/>
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
