import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LinkArrow from "../../assets/svg/Footer_svg/link_arrow.svg";
import WhatsApp from "../../assets/svg/Footer_svg/WhatsApp.svg";
import Instagram from "../../assets/svg/Footer_svg/Instagram.svg";
import TikTok from "../../assets/svg/Footer_svg/TikTok.svg";
import Facebook from "../../assets/svg/Footer_svg/Facebook.svg";
import "./footer.css";
import { useLanguage } from "../../context/language.context";
import translations from "../../translations";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { language } = useLanguage();
  const translation = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="align-left">
          <img src={Logo} className="logo" alt="The Comedy Pub logo" loading="lazy" />
          <address>
            <a
              href="https://maps.app.goo.gl/xk4nw7d9bYEoKptbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              {translation.footer.address}
              <img src={LinkArrow} alt="External link icon" loading="lazy" />
            </a>
          </address>
        </div>

        <div className="align-middle">
          <p>{translation.footer.dontMissLaugh}</p>
          <ul className="social-icons" aria-label={translation.footer.socialLabel}>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=436605268147&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translation.footer.whatsapp}
              >
                <img src={WhatsApp} alt="WhatsApp icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@the.comedy.pub?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translation.footer.tiktok}
              >
                <img src={TikTok} alt="TikTok icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/the.comedy.pub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translation.footer.instagram}
              >
                <img src={Instagram} alt="Instagram icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/the.comedy.pub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={translation.footer.facebook}
              >
                <img src={Facebook} alt="Facebook icon" loading="lazy" />
              </a>
            </li>
          </ul>
        </div>

        <div className="align-right">
          <Link to="/contact">
            {translation.footer.contact}
            <img src={LinkArrow} alt="Arrow icon" loading="lazy" />
          </Link>
          <Link to="/faq">
            {translation.footer.faq}
            <img src={LinkArrow} alt="Arrow icon" loading="lazy" />
          </Link>
        </div>
      </div>

      <hr />

      <ul className="legals">
        <li>&copy; {currentYear} The Comedy Pub. {translation.footer.rights}</li>
        <li><a href="#">{translation.footer.cookieSettings}</a></li>
        <li><a href="#">{translation.footer.terms}</a></li>
        <li><a href="#">{translation.footer.privacy}</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
