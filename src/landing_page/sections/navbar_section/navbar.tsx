import { useState, type FC, type MouseEvent } from "react";
import "./Navbar.css";
import { useTheme } from "../../../contexts/useTheme";
import wastewise from "../../../assets/images/wastewise.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

type NavbarProps = {
  onNavigate?: (section: string) => void;
};

// const navLinks = [
//   { name: "Home", section: "home" },
//   { name: "About", section: "about" },
//   { name: "How it works", section: "how-it-works" },
//   { name: "Member stories", section: "member-stories" },
// ];

const navLinks = [
    { name: "Home", section: "home" },
    { name: "How It Works", section: "how-it-works" },
    { name: "For Households", section: "about" },
    { name: "For Vendors", section: "vendor" },
    { name: "Pricing", section: "pricing" },
    { name: "About Us", section: "mission" },
    { name: "Contact", section: "footer" },
  ];
  

const Navbar: FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      window.location.href = "/"; // fallback
    }
    setIsMenuOpen(false);
  };

  const handleToggleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div
        className="main-nav-left"
        onClick={() => (window.location.href = "/")}
        style={{ cursor: "pointer" }}
      >
        <img src={wastewise} alt="wastewise" className="wastewise-image" />
        <span className="nav-brand">Waste Wise</span>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.section}
            className="nav-link-btn"
            onClick={() => handleLinkClick(link.section)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="main-nav-right">
        <button onClick={toggleTheme} className="theme-toggle-nav">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <button
          style={{ fontWeight: 600 }}
          className="login-button"
          onClick={() => (window.location.href = "/join")}
        >
          Join Vendor Waitlist
        </button>

        <button className="menu-toggle" onClick={handleToggleClick}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
