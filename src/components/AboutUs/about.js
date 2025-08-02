import CalendarSvg from "../../assets/svg/About_svg/Calendar.svg";
import LngSvg from "../../assets/svg/About_svg/Lng_svg.svg";
import MoneySvg from "../../assets/svg/About_svg/Money.svg";
import "./about.css";
import { useLanguage } from "../../context/language.context";
import translations from "../../translations";

const About = () => {
  const { language } = useLanguage();
  const translation = translations[language].aboutPage;

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <article className="about-text">
        <h1 id="about-title">{translation.heading}</h1>

        {/* Mobile layout only (visible <950px) */}
        <ul className="features-mobile">
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
          {translation.intro}{" "}
          <a
            href="https://maps.app.goo.gl/xk4nw7d9bYEoKptbA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kettenbrückengasse 7
          </a>
          , {translation.firstClub}
          <br />
          <br />
          {translation.comedyExperience}{" "}
          <a id="read-more" href="/">
            {translation.readMore}
          </a>
        </p>
      </article>

      <aside className="about-display" aria-label="Additional features and images">
        {/* Desktop layout only (visible >950px) */}
        <ul className="features" role="list">
          <li className="feature">
            <img src={CalendarSvg} alt="Calendar icon" />
            <p>{translation.dailyEvents}</p>
          </li>
          <li className="feature">
            <img src={LngSvg} alt="Languages icon" />
            <p>{translation.multilingual}</p>
          </li>
          <li className="feature">
            <img src={MoneySvg} alt="Free events icon" />
            <p>{translation.freeEvents}</p>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default About;
