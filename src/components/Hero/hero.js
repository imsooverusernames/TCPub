import "./hero.css";
import LogoBig from "../../assets/images/LogoBig.png";
import Location from "../../assets/svg/Hero_svg/Location.svg";
import HeroVid from "../../assets/video/vorschau.mp4";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={HeroVid} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>

      <img className="logobig" src={LogoBig} alt="Comedy Club Logo" />

      <div className="location">
        <img src={Location} alt="Location pin icon" />
        <p>Kettenbrückengasse 7, 1050 Vienna</p>
      </div>

      <div className="cta-buttons">
        <Link to="/contact" className="cta-link-button">
          Contact
        </Link>

        <button
          aria-label="Scroll to open mic section"
          onClick={() => scrollToSection("open-mic")}
        >
          Join an Open Mic
        </button>

        <button
          id="full-btn"
          aria-label="Scroll to events section"
          onClick={() => scrollToSection("events")}
        >
          Events
        </button>
      </div>

      <p>
        VIENNA'S ONLY DEDICATED STAND-UP COMEDY CLUB
      </p>
    </section>
  );
};

export default Hero;
