import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./landing_page/pages/Home";
import NotFound from "./landing_page/pages/NotFound";
import StepAWasteVendorCTA from "./landing_page/sections/Form/stepa/StepAWasteVendorCTA";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<StepAWasteVendorCTA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
