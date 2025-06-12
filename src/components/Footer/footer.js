import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LinkArrow from "../../assets/svg/Footer_svg/link_arrow.svg";
import WhatsApp from "../../assets/svg/Footer_svg/WhatsApp.svg";
import Instagram from "../../assets/svg/Footer_svg/Instagram.svg";
import TikTok from "../../assets/svg/Footer_svg/TikTok.svg";
import Facebook from "../../assets/svg/Footer_svg/Facebook.svg";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='align-left'>
                    <img src={Logo} className='logo'/>
                    <a
                        href="https://maps.app.goo.gl/xk4nw7d9bYEoKptbA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kettenbrückengasse 7, 1050 Vienna
                        <img src={LinkArrow} />
                    </a>
                </div>

                <div className='align-middle'>
                    <p>Don't Miss a Single Laugh</p>
                    <div className='social-icons'>
                        <a
                            href="https://api.whatsapp.com/send/?phone=436605268147&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={WhatsApp} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@the.comedy.pub?"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={TikTok} />
                        </a>
                        <a
                            href="https://www.instagram.com/the.comedy.pub/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={Instagram} />
                        </a>
                        <a
                            href="https://www.facebook.com/the.comedy.pub/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={Facebook} />
                        </a>
                    </div>
                </div>

                <div className='align-right'>
                    <Link to="/contact">
                        Contact us
                        <img src={LinkArrow} />
                    </Link>
                    <Link to="/faq">
                        FAQ
                        <img src={LinkArrow} />
                    </Link>
                </div>
            </div>

            <hr/>

            <div className='legals'>
                <p>&copy; {new Date().getFullYear()} The Comedy Pub. All rights reserved.</p>
                <p>Cookie settings</p>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
            </div>
        </footer>
    );
};

export default Footer;