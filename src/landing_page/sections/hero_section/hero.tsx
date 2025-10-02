import { type FC } from "react";
import "./hero.css";
import hero_image from "../../../assets/images/hero.png";

const HeroSection: FC = () => {
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
          <button
            className="waitlist-button-hero"
            onClick={() => (window.location.href = "/join")}
       
          >
            Join Vendor Waitlist
          </button>
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
