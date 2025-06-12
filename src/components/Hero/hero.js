import "./hero.css";
import LogoBig from "../../assets/images/LogoBig.png";
import Location from "../../assets/svg/Hero_svg/Location.svg";
import HeroVid from "../../assets/video/vorschau.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={HeroVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className="logobig" src={LogoBig} />
      <div className="location">
        <img src={Location} />
        <p>Kettenbrückengasse 7, 1050 Vienna</p>
      </div>
      <div className="cta-buttons">
        <Link to="/contact" className="cta-link-button">
          Contact
        </Link>
        <button
          onClick={() =>
            document
              .getElementById("open-mic")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Join an Open Mic
        </button>
        <button
          id="full-btn"
          onClick={() =>
            document
              .getElementById("events")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Events
        </button>
      </div>
      <p>VIENNA'S ONLY DEDICATED STAND-UP COMEDY CLUB</p>
    </section>
  );
};

export default Hero;
