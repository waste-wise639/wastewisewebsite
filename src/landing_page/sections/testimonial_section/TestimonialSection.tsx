import { type FC } from "react";
import "./TestimonialSection.css";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "WasteWise made it easy for our estate to keep the environment clean. Pickups are on time and reliable!",
    author: "Grace O., Resident",
    role: "Mother of Three",
  },
  {
    quote:
      "We gained 50 new clients in one month through WasteWise.",
    author: "GreenEarth Waste Ltd.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "The recycling rewards keep me motivated. Every time I recycle, I feel like I’m making a real difference — plus, the tips are very practical for students like me.",
    author: "Amina M.",
    role: "University Student",
  },
  {
    quote:
      "Before, I used to miss collection days a lot. Now with Waste Wise reminders, everything is on schedule. It’s a huge relief for me and my street.",
    author: "Tunde A.",
    role: "Civil Engineer",
  },
  {
    quote:
      "This is more than just an app — it feels like a community. Seeing my neighborhood’s progress and connecting with others makes me proud to be part of the change.",
    author: "Ngozi L.",
    role: "Community Organizer",
  },
];
const TestimonialSection: FC = () => {
  return (
    <section className="testimonials-grid-container">
      {/* Left: Title Group */}
      <div className="testimonials-title-group">
        <h2>TESTIMONIALS</h2>
        <h1>
          Trusted by Early <br />
          <span>Adopters</span>
        </h1>
      </div>

      {/* Right: Testimonial Cards Grid */}
      <div className="testimonials-card-area">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <p className="testimonial-author">
              — {t.author} 
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
