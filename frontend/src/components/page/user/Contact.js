import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../css/cart.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý gửi tin nhắn ở đây
    console.log("Form submitted");
  };

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Contact Us</span>
      </h2>
      <div className="row px-xl-5">
        {/* Contact Form */}
        <div className="col-lg-7 mb-5">
          <div className="contact-form bg-light p-4">
            <div id="success"></div>
            <form
              name="sentMessage"
              id="contactForm"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  data-validation-required-message="Please enter your name"
                />
                <div className="help-block text-danger"></div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                  data-validation-required-message="Please enter your email"
                />
                <div className="help-block text-danger"></div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                  data-validation-required-message="Please enter a subject"
                />
                <div className="help-block text-danger"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="8"
                  id="message"
                  placeholder="Message"
                  required
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <div className="help-block text-danger"></div>
              </div>
              <button
                className="btn btn-primary py-2 px-4"
                type="submit"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Map and Contact Info */}
        <div className="col-lg-5 mb-5">
          <div className="bg-light p-3 mb-3">
            <iframe
              style={{ width: "100%", height: "250px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="bg-light p-3">
            <p className="mb-2">
              <i className="bi bi-geo-alt text-primary mr-3"></i>
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="bi bi-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone text-primary mr-3"></i>
              +012 345 67890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
