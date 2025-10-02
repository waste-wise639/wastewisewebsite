import { type FC } from "react";
import "./features_section.css";
//import { FaMobileAlt, FaTruckMoving, FaGift } from "react-icons/fa";
import HowItWorksCard from "./HowItWorksCard";

// // Define the Feature interface (if not already done)
// interface Feature {
//   title: string;
//   text: string;
//   icon: React.ElementType; // This type allows us to pass the icon component directly
// }

// const features: Feature[] = [
//   {
//     icon: FaMobileAlt, // Using a React Icon component
//     title: "Book Pickup",
//     text: "Schedule waste collection right from your phone with just a few taps. Choose the time that works best for you and let us handle the rest.",
//   },
//   {
//     icon: FaTruckMoving, // Using a React Icon component
//     title: "Track in Real Time",
//     text: "Stay updated every step of the way. Know exactly when your vendor is on the way and monitor your waste collection in real time.",
//   },
//   {
//     icon: FaGift, // Using a React Icon component
//     title: "Get Rewarded",
//     text: "Turn recycling into rewards. Earn points each time you recycle consistently and redeem them for perks and benefits.",
//   },
// ];

const FeaturesSection: FC = () => {
  return (
    <section className="features-container">
      <div className="features-title-group">
        <h2>How WasteWise Works for You?</h2>
        <h1
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          Simple, reliable waste management in
          <br /> <span>three easy steps.</span>
        </h1>
      </div>

      {/* <div className="features-content-grid">
     
        <div className="features-list-group">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
           
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" />
              </div>

              <div className="feature-text-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <section className="how-it-works-section">
        <HowItWorksCard
          icon="📱" // Mobile Phone Emoji
          stepNumber={1}
          title="Book Pickup"
          description="Schedule waste collection right from your phone at your convenience"
        />
        <HowItWorksCard
          icon="🚚" // Delivery Truck Emoji
          stepNumber={2}
          title="Track in Real Time"
          description="Know exactly when your vendor is on the way with live GPS tracking"
        />
        <HowItWorksCard
          icon="🎁" // Gift Box Emoji
          stepNumber={3}
          title="Get Rewarded"
          description="Earn points for consistent recycling and eco-friendly practices"
        />
      </section>
    </section>
  );
};

export default FeaturesSection;
