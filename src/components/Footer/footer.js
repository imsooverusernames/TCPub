import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LinkArrow from "../../assets/svg/Footer_svg/link_arrow.svg";
import WhatsApp from "../../assets/svg/Footer_svg/WhatsApp.svg";
import Instagram from "../../assets/svg/Footer_svg/Instagram.svg";
import TikTok from "../../assets/svg/Footer_svg/TikTok.svg";
import Facebook from "../../assets/svg/Footer_svg/Facebook.svg";
import './footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
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
              Kettenbrückengasse 7, 1050 Vienna
              <img src={LinkArrow} alt="External link icon" loading="lazy" />
            </a>
          </address>
        </div>

        <div className="align-middle">
          <p>Don't Miss a Single Laugh</p>
          <ul className="social-icons" aria-label="Social media links">
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=436605268147&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
              >
                <img src={WhatsApp} alt="WhatsApp icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@the.comedy.pub?"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit TikTok page"
              >
                <img src={TikTok} alt="TikTok icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/the.comedy.pub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Instagram page"
              >
                <img src={Instagram} alt="Instagram icon" loading="lazy" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/the.comedy.pub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook page"
              >
                <img src={Facebook} alt="Facebook icon" loading="lazy" />
              </a>
            </li>
          </ul>
        </div>

        <div className="align-right">
          <Link to="/contact">
            Contact us
            <img src={LinkArrow} alt="Arrow icon" loading="lazy" />
          </Link>
          <Link to="/faq">
            FAQ
            <img src={LinkArrow} alt="Arrow icon" loading="lazy" />
          </Link>
        </div>
      </div>

      <hr />

      <ul className="legals">
        <li>&copy; {currentYear} The Comedy Pub. All rights reserved.</li>
        <li><a href="#">Cookie settings</a></li>
        <li><a href="#">Terms and conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
