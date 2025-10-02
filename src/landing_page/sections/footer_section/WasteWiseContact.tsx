import React from "react";
import "./WasteWiseContact.css";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

const WasteWiseContact: React.FC = () => {
  return (
    <section className="wastewise-contact-section">
      <div className="wastewise-contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about WasteWise? We'd love to hear from you.</p>
      </div>

      <div className="wastewise-contact-content-container">
        {/* Left Side: Contact Information Block */}
        <div className="wastewise-contact-info-block">
          {/* Email */}
          <div className="wastewise-contact-item">
            <IoMail className="wastewise-contact-icon" />
            <div>
              <p className="wastewise-contact-label">Email</p>
              <a
                href="mailto:support@wastewiseinc.com"
                className="wastewise-contact-detail"
              >
                support@wastewiseinc.com
              </a>
              <a
                href="mailto:info@wastewiseinc.com"
                className="wastewise-contact-detail"
              >
                info@wastewiseinc.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="wastewise-contact-item">
            <BsTelephoneFill className="wastewise-contact-icon" />
            <div>
              <p className="wastewise-contact-label">Phone</p>
              <a href="tel:+2349025013289" className="wastewise-contact-detail">
                +234 902 501 3289
              </a>
            </div>
          </div>

          {/* Office Address */}
          <div className="wastewise-contact-item">
            <IoLocationSharp className="wastewise-contact-icon" />
            <div>
              <p className="wastewise-contact-label">Office Address</p>
              <address className="wastewise-contact-address">
                19B Ada George Road
                <br />
                Opp Father's House
                <br />
                Port Harcourt, Rivers State
                <br />
                Nigeria
              </address>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="wastewise-contact-form-block">
          <form className="wastewise-contact-form">
            <label htmlFor="fullName" className="wastewise-contact-label-form">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="wastewise-contact-input"
              placeholder="Enter your full name"
              required
            />

            <label htmlFor="email" className="wastewise-contact-label-form">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="wastewise-contact-input"
              placeholder="Enter your email address"
              required
            />

            <label htmlFor="message" className="wastewise-contact-label-form">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="wastewise-contact-textarea"
              placeholder="Type your message here..."
              required
            />

            <button type="submit" className="wastewise-submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WasteWiseContact;
