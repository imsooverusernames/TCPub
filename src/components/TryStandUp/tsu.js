import { Link } from "react-router-dom";
import "./tsu.css";
import { useLanguage } from "../../context/language.context";
import translations from "../../translations";

const TryStandUp = () => {
  const { language } = useLanguage();
  const translation = translations[language]; // ✅ declare the variable

  return (
    <div className="tsu-section" id="open-mic">
      <div className="tsu-header">
        <h1>{translation.tryStandUp.title}</h1>
        <h2>{translation.tryStandUp.subtitle}</h2>
      </div>
      <div className="tsu-cards">
        <div className="tsu-card">
          <h3>{translation.tryStandUp.card1.title}</h3>
          <hr className="tsu-hr" />
          <p>{translation.tryStandUp.card1.description}</p>
          <Link to="/contact">{translation.tryStandUp.card1.cta}</Link>
        </div>
        <div className="tsu-card">
          <div className="card-header">
            <h3>{translation.tryStandUp.card2.title}</h3>
            <hr className="tsu-hr" />
          </div>
          <p>{translation.tryStandUp.card2.description}</p>
          <a
            href="https://www.instagram.com/the.comedy.pub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation.tryStandUp.card2.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TryStandUp;
