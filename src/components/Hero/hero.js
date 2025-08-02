import "./hero.css";
import LogoBig from "../../assets/images/LogoBig.png";
import Location from "../../assets/svg/Hero_svg/Location.svg";
import HeroVid from "../../assets/video/vorschau.mp4";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/language.context";
import translations from "../../translations";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const { language } = useLanguage();
  const translation = translations[language];

  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={HeroVid} type="video/mp4" />
        <p>{translation.hero.noVideoSupport}</p>
      </video>

      <img className="logobig" src={LogoBig} alt="Comedy Club Logo" />

      <div className="location">
        <img src={Location} alt={translation.hero.locationIconAlt} />
        <p>{translation.hero.address}</p>
      </div>

      <div className="cta-buttons">
        <Link to="/contact" className="cta-link-button">
          {translation.hero.contact}
        </Link>

        <button
          aria-label={translation.hero.scrollOpenMic}
          onClick={() => scrollToSection("open-mic")}
        >
          {translation.hero.openMic}
        </button>

        <button
          id="full-btn"
          aria-label={translation.hero.scrollEvents}
          onClick={() => scrollToSection("events")}
        >
          {translation.hero.events}
        </button>
      </div>

      <p>{translation.hero.subtitle}</p>
    </section>
  );
};

export default Hero;
