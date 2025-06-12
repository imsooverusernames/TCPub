import AboutImg from "../../assets/images/about_img.png";
import CalendarSvg from "../../assets/svg/About_svg/Calendar.svg";
import LngSvg from "../../assets/svg/About_svg/Lng_svg.svg";
import MoneySvg from "../../assets/svg/About_svg/Money.svg";
import "./about.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-text">
        <h1>About Us</h1>

        {/* Mobile layout only (visible <950px) */}
        <div className="features-mobile">
          <div className="feature">
            <img src={CalendarSvg} alt="Calendar icon" />
            <p>Daily&nbsp;Events</p>
          </div>
          <div className="feature">
            <img src={LngSvg} alt="Languages icon" />
            <p>Multilingual</p>
          </div>
          <div className="feature">
            <img src={MoneySvg} alt="Free events icon" />
            <p>Free&nbsp;Events</p>
          </div>
        </div>

        <p>
          Welcome to The Comedy Pub — Vienna’s one and only home for full-time
          funny business! Tucked away at{" "}
          <a
            href="https://maps.app.goo.gl/xk4nw7d9bYEoKptbA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kettenbrückengasse 7
          </a>
          , we’re proud to be the city’s first and only dedicated stand-up
          comedy club. <br />
          <br /> Get ready for a night of belly laughs, brilliant comedians, and
          an atmosphere that’s all about fun. Our stage features a handpicked
          lineup of comic talent, from up-and-coming jokesters to seasoned pros,
          all bringing their best to keep you laughing from start to finish.
          Whether you're a local or just passing through, there's always
          something (and someone) worth laughing at.{" "}
          <a id="read-more" href="/">
            Read&nbsp;More&nbsp;→
          </a>
        </p>
      </div>
      <div className="about-display">
        {/* Desktop layout only (visible >950px) */}
        <div className="features">
          <div className="feature">
            <img src={CalendarSvg} alt="Calendar icon" />
            <p>Daily&nbsp;Events</p>
          </div>
          <div className="feature">
            <img src={LngSvg} alt="Languages icon" />
            <p>Multilingual</p>
          </div>
          <div className="feature">
            <img src={MoneySvg} alt="Free events icon" />
            <p>Free&nbsp;Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
