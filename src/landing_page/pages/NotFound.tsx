import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../sections/navbar_section/navbar";
import WasteWiseFooter from "../sections/footer_section/WasteWiseFooter";

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div
        style={{
          fontFamily: "'Rethink Sans', sans-serif",
          backgroundColor: "var(--bg-primary)",
          color: "var(--text-primary)",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "16px",
          marginTop: 100,
        }}
      >
        <h1
          style={{
            fontSize: "6rem",
            margin: "0",
            color: "var(--accent-color)",
            textShadow: `0px 4px 10px var(--shadow-color)`,
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>Page Not Found</h2>
        <p style={{ maxWidth: "500px", color: "var(--text-secondary)" }}>
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "12px 28px",
            fontSize: "1rem",
            backgroundColor: "var(--accent-color)",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            boxShadow: `0px 4px 12px var(--shadow-color)`,
            transition: "all 0.3s ease",
            fontFamily: "'Rethink Sans', sans-serif",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4ae63e")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--accent-color)")
          }
        >
          Go Home
        </button>
      </div>
      <WasteWiseFooter />
    </>
  );
};

export default NotFoundPage;
