import './tbs.css';
import Tbs from "../../assets/images/tbs.png"
import { ReactComponent as Send } from "../../assets/svg/Contact_svg/Send.svg";

const Theblacksheep = () => {
    return (
        <section className='theblacksheep' aria-labelledby="tbs-heading">
            <h2 id="tbs-heading">Need to fuel your belly laughs?</h2>
            <h3>From drinks to food out friends at The Black Sheep got you!</h3>
            <img src={Tbs} alt="The Black Sheep logo"/>
            <nav className="tbs-links" aria-label="The Black Sheep links">
                <a
                    href="https://theblacksheep.at/our-menu-%f0%9f%96%a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View menu
                    <Send className="send-icon" role="img" aria-label="Send icon" />
                </a>
                <a
                    href="https://theblacksheep.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit the bar
                    <Send className="send-icon" role="img" aria-label="Send icon" />
                </a>
            </nav>
        </section>
    );
};

export default Theblacksheep;