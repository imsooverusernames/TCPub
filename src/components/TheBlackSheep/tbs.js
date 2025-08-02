import './tbs.css';
import Tbs from "../../assets/images/tbs.png";
import { ReactComponent as Send } from "../../assets/svg/Contact_svg/Send.svg";
import { useLanguage } from "../../context/language.context";
import translations  from "../../translations";

const Theblacksheep = () => {
  const { language } = useLanguage()
  const translation = translations[language];

  return (
    <section className="theblacksheep" aria-labelledby="tbs-heading">
      <h2 id="tbs-heading">{translation.blackSheep.heading}</h2>
      <h3>{translation.blackSheep.subheading}</h3>
      <img src={Tbs} alt="The Black Sheep logo" />
      <nav className="tbs-links" aria-label={translation.blackSheep.linksLabel}>
        <a
          href="https://theblacksheep.at/our-menu-%f0%9f%96%a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translation.blackSheep.viewMenu}
          <Send className="send-icon" role="img" aria-label="Send icon" />
        </a>
        <a
          href="https://theblacksheep.at/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translation.blackSheep.visitBar}
          <Send className="send-icon" role="img" aria-label="Send icon" />
        </a>
      </nav>
    </section>
  );
};

export default Theblacksheep;
