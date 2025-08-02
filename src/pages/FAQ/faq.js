import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./faq.css";
import { useLanguage } from "../../context/language.context";
import translations from "../../translations";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage();
  const t = translations[language].faq;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>{t.heading}</h1>
      <div className="questions">
        {t.questions.map((item, idx) => (
          <div key={idx}>
            <button
              className="question-btn"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              {item.question}
            </button>

            {idx < t.questions.length - 1 && openIndex !== idx && (
              <hr className="hr-faq" />
            )}

            {openIndex === idx && (
              <>
                <div className="answer">{item.answer}</div>
                {idx !== t.questions.length - 1 && <hr className="hr-faq" />}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="contact-link">
        <p>{t.stillNeedHelp}</p>
        <Link to="/contact">{t.contactUs}</Link>
      </div>
    </div>
  );
};

export default FAQ;