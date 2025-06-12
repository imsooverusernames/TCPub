import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const faqData = [
  {
    question: "How big is it?",
    answer: "Our venue is pretty big! It can fit up to 50 people.",
  },
  {
    question: "Can I try it?",
    answer: `Absolutely! This isn't an elite comedy cult (yet). Just comment "Spot please" on our latest open mic post on Instagram to sign up for a slot.`,
  },
  {
    question: "I'm scared. What if I'm not good?",
    answer:
      "Totally normal. Fear is the first step. Not being good is the second. With a little practice, you'll get better ;)",
  },
  {
    question: "Will you teach me?",
    answer:
      "We've got workshops, open mics, and regulars who love giving unsolicited advice.",
  },
  {
    question: "Are we still talking about comedy?",
    answer: "Come to Kettenbrückengasse 7 in your best lingerie to find out.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>FAQ</h1>
      <div className="questions">
        {faqData.map((item, idx) => (
          <div key={idx}>
            <button
              className="question-btn"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {item.question}
            </button>

            {idx < faqData.length - 1 && openIndex !== idx && (
              <hr className="hr-faq" />
            )}

            {openIndex === idx && (
              <>
                <div className="answer">{item.answer}</div>
                {idx !== faqData.length - 1 && <hr className="hr-faq" />}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="contact-link">
        <p>Still need help?</p>
        <Link to="/contact">Contact us</Link>
      </div>
    </div>
  );
};

export default FAQ;
