import { type FC } from "react";
import "./Stat_bar.css";

interface Stat {
  number: string;
  description: string;
}

const stats: Stat[] = [
  {
    number: "82%",
    description: "Of users say they feel more organized with waste tracking.",
  },
  {
    number: "50kg+",
    description: "Average household waste reduced per year with Waste Wise.",
  },
  {
    number: "1,200+",
    description:
      "Of businesses say Waste Wise helps them meet sustainability goals.",
  },
  {
    number: "75+",
    description:
      "Waste Vendors, ready to dispose your waste no matter your location",
  },
];

const StatBar: FC = () => {
  return (
    <div className="stat-bar-container section-below-hero">
      <div className="stat-bar-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatBar;
