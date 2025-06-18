import "./events.css";
import Time from "../../assets/svg/Events_svg/Time.svg";
import Globe from "../../assets/svg/Events_svg/Events_Globe.svg";
import { ReactComponent as Booking } from "../../assets/svg/Events_svg/Booking.svg";
import TestImg from "../../assets/images/test_img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

// EventCard component
const EventCard = ({ event }) => (
  <article className="event-card" key={event.id}>
    <header className="card-top">
      <img
        className="event-img"
        src={event.img}
        alt={`${event.title} image`}
      />
      <div className="event-time">
        {event.date}
        <div>
          <img src={Time} className="svgs" alt="Time icon" />
          {event.time}
        </div>
      </div>
    </header>
    <div className="event-description">
      <h3>{event.title}</h3>
      <p>
        <span className="truncate-text">{event.description}{" "}</span>
        <Link to={`/events/${event.id}`}>Read&nbsp;More&nbsp;→</Link>
      </p>
    </div>
    <footer className="card-bottom">
      <div className="show-language">
        <img src={Globe} className="svgs" alt="Language icon" />
        {event.language}
      </div>
      <button>
        <Booking className="book-icon" aria-label="Book icon" />
        Book Now
      </button>
    </footer>
  </article>
);

const Events = () => {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "English Comedy Open Mic",
      date: "Mon 8. March",
      time: "20:15",
      language: "Deutsch",
      priceType: "free",
      description: "Come and enjoy an open mic night full of laughter.",
      img: TestImg,
    },
    {
      id: 2,
      title: "Tech Talk Berlin",
      date: "Wed 10. March",
      time: "18:00",
      language: "English",
      priceType: "paid",
      description: "Join us for  usdnnfeu dmsapdmw g rtbmp0x gdj bojfd fldgjnrsivrj boregrwlfeslknkhfg  esrf epfs pesmfopesmfpersmgk pesfmsepofk  erpfsjrh  ero gr grgore rgrmg rgtz mu k iju h fg dh tohgmfhjt gtb a tech panel  usdnnfeu dmsapdmw g rtbmp0x gdj bojfd fldgjnrsivrj boregrwlfeslknkhfg  esrf epfs pesmfopesmfpersmgk pesfmsepofk  erpfsjrh  ero gr grgore rgrmg rgtz mu k iju h fg dh tohgmfhjt gtb a tech panel discussion with local  usdnnfeu dmsapdmw g rtbmp0x gdj bojfd fldgjnrsivrj boregrwlfeslknkhfg  esrf epfs pesmfopesmfpersmgk pesfmsepofk  erpfsjrh  ero gr grgore rgrmg rgtz mu k iju h fg dh tohgmfhjt gtb a tech panel discussion with local  discussion with local experts.",
      img: TestImg,
    },
    {
      id: 3,
      title: "Tech Talk Berlin",
      date: "Wed 10. March",
      time: "18:00",
      language: "English",
      priceType: "paid",
      description: "Join us for a tech panel discussion with local experts.",
      img: TestImg,
    },
    {
      id: 4,
      title: "Tech Talk Berlin",
      date: "Wed 10. March",
      time: "18:00",
      language: "English",
      priceType: "paid",
      description: "Join us ispekadnwka ndwaodowndwoa dwoan iwa dwaiu diwa diwa diuwa duiwa duiwaogrgprspfepofeswo fnesoa fesofespfesoipiefpioessedaöodkiasndm for a tech panel discussion with local experts.",
      img: TestImg,
    },
  ];

  const anticipatedEvents = [
    {
      id: 3,
      title: "Anticipated English Comedy Open Mic",
      date: "Mon 15. March",
      time: "20:15",
      language: "Deutsch",
      priceType: "free",
      description: "Experience top-notch comedians before they go mainstream!",
      img: TestImg,
    },
  ];

  const visibleEvents =
    filter === "all" ? events : events.filter((e) => e.priceType === filter);

  return (
    <section className="upcoming-events" id="events">
      <h1>Upcoming Events</h1>

      {/* Filter Buttons */}
      <div className="event-display">
        <div className="entry-options">
          {["paid", "free", "all"].map((type) => (
            <button
              key={type}
              type="button"
              className={`filter-btn ${filter === type ? "active" : ""}`}
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Events List */}
        <div className="events">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Anticipated Events */}
      <div className="event-display">
        <h2>Anticipated One-Offs</h2>
        <div className="events">
          {anticipatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
