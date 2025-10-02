import React from "react";
import "./WasteWiseFooter.css";
// Import icons from react-icons/fa for the social media links
import {
  FaFacebook,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import WasteWiseContact from "./WasteWiseContact";

type WasteWiseFooterProps = {
  onNavigate?: (section: string) => void;
};

const footerLinks = [
  { name: "Home", section: "home" },
  { name: "How It Works", section: "how-it-works" },
  { name: "For Households", section: "about" },
  { name: "For Vendors", section: "vendor" },
  { name: "Pricing", section: "pricing" },
  { name: "About Us", section: "mission" },
  { name: "Contact", section: "footer" },
];

const WasteWiseFooter: React.FC<WasteWiseFooterProps> = ({ onNavigate }) => {
  const handleFooterNavigate = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <WasteWiseContact />
      <footer className="wastewise-footer-container">
        <div className="wastewise-footer-content">
          {/* Left Section: Brand/Links (Combined into one column for this layout) */}
          <div className="wastewise-footer-column">
            <h3 className="wastewise-footer-logo">Waste Wise</h3>

            {/* New Center Section: Contact Information */}
            <div className="wastewise-footer-column wastewise-footer-contact">
        

              <div className="contact-item">
                <div>
                  <p className="contact-label">Email</p>
                  <a
                    href="mailto:support@wastewiseinc.com"
                    className="contact-detail"
                  >
                    support@wastewiseinc.com
                  </a>
                  <a
                    href="mailto:info@wastewiseinc.com"
                    className="contact-detail"
                  >
                    info@wastewiseinc.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+2349025013289" className="contact-detail">
                    +234 902 501 3289
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <p className="contact-label">Office Address</p>
                  <p className="contact-detail">
                    19B Ada George Road
                    <br />
                    Opp Father's House
                    <br />
                    Port Harcourt, Rivers State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wastewise-footer-links-column">
            <p className="column-heading">Quick Links</p>
            {footerLinks.map((link) => (
              <button
                key={link.section}
                className="wastewise-footer-link nav-link-btn"
                onClick={() => handleFooterNavigate(link.section)}
              >
                {link.name}
              </button>
            ))}
          </div>
          {/* Right Section: CTA Card */}
          <div className="wastewise-footer-cta-card">
            <h4 className="wastewise-footer-cta-headline">
              Let's Get Started!
            </h4>
            <p className="wastewise-footer-cta-description">
              Come together with change makers shaping a cleaner future. Your
              seat in this movement is waiting. Together, we can reduce waste,
              recycle smarter, and build sustainable cities.
            </p>
            <button
              className="wastewise-footer-cta-button"
              onClick={() => (window.location.href = "/join")}
            >
              Join Our Waitlist
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="wastewise-footer-bottom">
          {/* ... (Social media and copyright remains the same) ... */}
          <div className="wastewise-footer-social">
            <a
              href="#facebook"
              className="wastewise-footer-social-icon"
              aria-label="Facebook"
              style={{ color: "#5FFF4D" }}
            >
              <FaFacebook />
            </a>
            <a
              href="#linkedin"
              className="wastewise-footer-social-icon"
              aria-label="LinkedIn"
              style={{ color: "#5FFF4D" }}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#whatsapp"
              className="wastewise-footer-social-icon"
              aria-label="WhatsApp"
              style={{ color: "#5FFF4D" }}
            >
              <FaWhatsapp />
            </a>
            <a
              href="#instagram"
              className="wastewise-footer-social-icon"
              aria-label="Instagram"
              style={{ color: "#5FFF4D" }}
            >
              <FaInstagram />
            </a>
          </div>
          <p className="wastewise-footer-copyright">
            © 2025 Waste Wise. All rights reserved.
          </p>
        </div>

        {/* Decorative background icon */}
        <div className="wastewise-footer-decorative-icon" aria-hidden="true">
          🗑️
        </div>
      </footer>
    </>
  );
};

export default WasteWiseFooter;
