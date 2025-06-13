import './tbs.css';
import Tbs from "../../assets/images/tbs.png"
import { ReactComponent as LinkArrow } from '../../assets/svg/TBS_svg/link_arrow.svg';

const Theblacksheep = () => {
    return (
        <section className='theblacksheep' aria-labelledby="tbs-heading">
            <h2 id="tbs-heading">NEED TO FUEL YOUR BELLY LAUGHTS?</h2>
            <h3>From drinks to food out friends at The Black Sheep got you!</h3>
            <img src={Tbs} alt="The Black Sheep logo"/>
            <nav className="tbs-links" aria-label="The Black Sheep links">
                <a
                    href="https://theblacksheep.at/our-menu-%f0%9f%96%a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Menu
                    <LinkArrow className="icon" role="img" aria-label="link_arrow"/>
                </a>
                <a
                    href="https://theblacksheep.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit the Bar
                    <LinkArrow className="icon" role="img" aria-label="link_arrow"/>
                </a>
            </nav>
        </section>
    );
};

export default Theblacksheep;