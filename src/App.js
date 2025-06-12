import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Events from "./components/Events/events";
import TheBlackSheep from "./components/TheBlackSheep/tbs";
import Footer from "./components/Footer/footer";
import About from "./components/AboutUs/about";
import TryStandUp from "./components/TryStandUp/tsu";

// Pages
import FAQ from "./pages/FAQ/faq";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Events />
              <TheBlackSheep />
              <About />
              <TryStandUp />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
