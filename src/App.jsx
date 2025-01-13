import { Routes, Route, useLocation, useNavigationType } from "react-router";
import Home from "./pages/Home";
import Base from "./Calculators/BaseConverts";
import BaseConverter from "./pages/BaseConverter";
import MortgageCalculator from "./pages/MortgageCalculator"; 
import ScientificCalculator from "./pages/ScientificCalculator";
import ScientificCalculatorSample from "./Calculators/ScientificCalculator/ScientificCalculatorSample";
import PhysicsUnitConverter from "./pages/PhysicsUnitConverter";
import PhysicsCalc from "./Calculators/PhysicsUnitConverter/physicsCalc";
import BlogExpand from "./pages/BlogExpand";
import Notes from "./pages/Notes";
import AboutUS from "./pages/AboutUS";
import MortageCalculatorSample from "./Calculators/MortgageCalculator/MortageCalculatorSample";
import { useEffect } from "react";
import Blogs from "./pages/Blogs";
import CalcUpdated from "./Calculators/ScientificCalculator/CalcUpdated";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/base-converter" element={<BaseConverter/>} />
    <Route path="/mortgage-calculator" element={<MortgageCalculator/>} />
    <Route path="/scientfic-calculator" element={<ScientificCalculator/>} />
    <Route path="/physics-unit-converter" element={<PhysicsUnitConverter/>} />
    <Route path="/blog-detail" element={<BlogExpand/>} />
    <Route path="/notes" element={<Notes/>} />
    <Route path="/about-us" element={<AboutUS/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/2" element={<CalcUpdated/>} />
    <Route path="/3" element={<ScientificCalculatorSample/>} />
  </Routes>
  )
}

export default App
