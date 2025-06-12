import './tbs.css';
import Tbs from "../../assets/images/tbs.png"
import { ReactComponent as LinkArrow } from '../../assets/svg/TBS_svg/link_arrow.svg';

const Theblacksheep = () => {
    return (
        <section className='theblacksheep'>
            <h2>NEED TO FUEL YOUR BELLY LAUGHTS?</h2>
            <h4>From drinks to food out friends at The Black Sheep got you!</h4>
            <img src={Tbs} />
            <div className="tbs-links">
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
            </div>
        </section>
    );
};

export default Theblacksheep;