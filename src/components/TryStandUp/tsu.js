import { Link } from "react-router-dom";
import "./tsu.css";

const TryStandUp = () => {
  return (
    <div className="tsu-section" id="open-mic">
      <div className="tsu-header">
        <h1>Got Jokes?</h1>
        <h2>Try Stand-Up at our Pub</h2>
      </div>
      <div className="tsu-cards">
        <div className="tsu-card">
          <h3>Ready to give stand-up a shot?</h3>
          <hr className="tsu-hr"/>
          <p>
            Our <em>5-week</em> beginner-friendly workshop led by Terence, a professional
            comedian from the U.S. with over 10 years of stage experience. Each
            weekly session runs for <em>2 hours</em> and covers everything from writing
            your first joke to owning the mic.
            <br /> In the final week, you’ll put your skills to the test with a
            live performance at our open mic night. Whether you're chasing
            laughs or just stepping out of your comfort zone, this is where it
            all begins.
          </p>
          <Link to="/contact">Join a Workshop</Link>
        </div>
        <div className="tsu-card">
          <div className="card-header">
            <h3>Already got the jokes?</h3>
            <hr className="tsu-hr"/>
          </div>
          <p>
            Step into the spotlight at our next Open Mic Night!
            <br /> To sign up, head over to our pub’s Instagram and comment
            <em>“Spot please”</em> on the most recent post about the upcoming open mic
            event.
            <br /> It’s first come, first served so keep an eye out and grab
            your spot early. Let’s hear what you’ve got!
          </p>
          <a
            href="https://www.instagram.com/the.comedy.pub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve a Spot
          </a>
        </div>
      </div>
    </div>
  );
};

export default TryStandUp;
