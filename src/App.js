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
import { LanguageContext } from "./context/language.context";
import { useState } from "react";


function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      <Router basename="/tcp-frontend">
        <Navbar onLanguageChange={toggleLanguage} />
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
    </LanguageContext.Provider>
  );
}

export default App;
