import AboutImg from "../../assets/images/about_img.png";
import CalendarSvg from "../../assets/svg/About_svg/Calendar.svg";
import LngSvg from "../../assets/svg/About_svg/Lng_svg.svg";
import MoneySvg from "../../assets/svg/About_svg/Money.svg";
import "./about.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <article className="about-text">
        <h1 id="about-title">About Us</h1>

        {/* Mobile layout only (visible <950px) */}
        <ul className="features-mobile" role="list">
          <li className="feature">
            <img src={CalendarSvg} alt="Calendar icon" />
            <p>Daily&nbsp;Events</p>
          </li>
          <li className="feature">
            <img src={LngSvg} alt="Languages icon" />
            <p>Multilingual</p>
          </li>
          <li className="feature">
            <img src={MoneySvg} alt="Free events icon" />
            <p>Free&nbsp;Events</p>
          </li>
        </ul>

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
      </article>

      <aside className="about-display" aria-label="Additional features and images">
        {/* Desktop layout only (visible >950px) */}
        <ul className="features" role="list">
          <li className="feature">
            <img src={CalendarSvg} alt="Calendar icon" />
            <p>Daily&nbsp;Events</p>
          </li>
          <li className="feature">
            <img src={LngSvg} alt="Languages icon" />
            <p>Multilingual</p>
          </li>
          <li className="feature">
            <img src={MoneySvg} alt="Free events icon" />
            <p>Free&nbsp;Events</p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default About;
