// src/pages/Home.tsx
import React, { useRef, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HeroSection from "../sections/hero_section/hero";
import StatBar from "../sections/stats_bar_section/Stats_bar";
import FeaturesSection from "../sections/features_section/features_section";
import TestimonialSection from "../sections/testimonial_section/TestimonialSection";
import WasteVendorCTA from "../sections/WasteVendorCTA_section/WasteVendorCTA";
import Navbar from "../sections/navbar_section/navbar";

import { FaArrowUp } from "react-icons/fa";
import WasteWiseFooter from "../sections/footer_section/WasteWiseFooter";
import WasteWiseMission from "../sections/WasteWiseMission/WasteWiseMission";
import WasteWisePricing from "../sections/WasteWisePricing/WasteWisePricing";
import WasteWiseBenefits from "../sections/persona_section/WasteWiseBenefits";

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const personaRef = useRef<HTMLDivElement | null>(null);
  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const vendorRef = useRef<HTMLDivElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const getRefBySection = (section: string) => {
    switch (section) {
      case "home":
        return heroRef;
      case "about":
        return personaRef;
      case "how-it-works":
        return featuresRef;
      case "member-stories":
        return testimonialRef;
      case "footer":
        return footerRef;
      case "vendor":
        return vendorRef;
      case "mission":
        return missionRef;
      case "pricing":
        return pricingRef;
      default:
        return null;
    }
  };

  // scroll handler (accounts for fixed header)
  const handleScrollTo = useCallback((section: string) => {
    const ref = getRefBySection(section);
    if (!ref?.current) return;

    const header = document.querySelector(".main-nav") as HTMLElement | null;
    const headerHeight = header ? header.offsetHeight : 0;

    const top =
      ref.current.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // Track scroll position → toggle scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // React Router state scroll handler
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const state = (location.state as { scrollTo?: string } | null) ?? null;
    if (state?.scrollTo) {
      setTimeout(() => handleScrollTo(state.scrollTo!), 20);
      navigate(location.pathname, { replace: true, state: {} });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <>
      <Navbar onNavigate={handleScrollTo} />

      <div ref={heroRef}>
        <HeroSection />
      </div>

      <StatBar />

      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <div ref={personaRef}>
        <WasteWiseBenefits />
      </div>
      <div ref={missionRef}>
        <WasteWiseMission />
      </div>

      <div ref={testimonialRef}>
        <TestimonialSection />
      </div>

   
      <div ref={pricingRef}>
        <WasteWisePricing />
      </div>

      <div ref={vendorRef}>
        <WasteVendorCTA />
      </div>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            background: "var(--accent-color)",
            color: "var(--bg-primary)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 10px var(--shadow-color)",
            transition: "opacity 0.3s",
            zIndex: 1000,
          }}
        >
          <FaArrowUp />
        </button>
      )}

      <div ref={footerRef}>
        <WasteWiseFooter onNavigate={handleScrollTo} />
      </div>
    </>
  );
};

export default Home;
