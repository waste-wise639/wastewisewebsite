import { type FC } from "react";
import "./hero.css";
import hero_image from "../../../assets/images/hero.png";
// Import the specific icons you need from react-icons/fa (Font Awesome)
import { FaApple, FaGooglePlay } from "react-icons/fa";

const HeroSection: FC = () => {
  // Placeholder links - update these with your actual App Store/Play Store URLs
  const iOSLink = "https://www.apple.com/app-store/";
  const androidLink = "https://play.google.com/store";

  return (
    <div className="hero-container">
      <div className="hero-card">
        {/* Left Content Area */}
        <div className="hero-content">
          <h1 className="hero-heading">
            Smart Waste Management for a<span> Cleaner Future</span>
          </h1>
          <p className="hero-text">
            WasteWise connects households and businesses with verified waste
            vendors for reliable, eco-friendly waste collection and recycling.{" "}
          </p>
          <br />
          {/* Action Buttons Group */}
          <div className="action-buttons-group">
            {/* Waitlist Button */}
            <button
              className="waitlist-button-hero"
              onClick={() => (window.location.href = "/join")}
            >
              Join Vendor Waitlist
            </button>

            {/* Download App Buttons */}
            <div className="app-download-group">
              <a
                href={iOSLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button ios-button"
              >
                {/* React Icon for Apple */}
                <FaApple style={{ marginRight: 12 }} /> Download on the App
                Store
              </a>
              <a
                href={androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button ios-button"
                // className="download-button android-button"
              >
                {/* React Icon for Google Play */}
                <FaGooglePlay style={{ marginRight: 12 }} /> Get it on Google
                Play
              </a>
            </div>
          </div>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="hero-illustration">
          <img src={hero_image} alt="hero_image" className="hero_image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
