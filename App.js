import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Updates from "./pages/Updates.js";
import Contact from "./pages/Contact.js";
export default function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourbusinuss" element={<About />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
    </Router>
  );
}
