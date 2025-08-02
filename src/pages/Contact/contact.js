import { useState } from "react";
import { ReactComponent as Send } from "../../assets/svg/Contact_svg/Send.svg";
import Email from "../../assets/svg/Contact_svg/Email.svg";
import WhatsApp from "../../assets/svg/Contact_svg/WhatsApp.svg";
import Location from "../../assets/svg/Contact_svg/Location.svg";
import "./contact.css";
import { useLanguage } from "../../context/language.context";
import translations  from "../../translations";

const CONTACT_LINKS_TOP = [
  {
    id: "email-link",
    icon: Email,
    alt: "Email icon",
    text: "info@thecomedypub.at",
    href: "mailto:info@thecomedypub.at?subject=Inquiry%20from%20The%20Comedy%20Pub%20Website&body=Hello%20Comedy%20Pub%20Team,",
  },
  {
    id: "whatsapp-link",
    icon: WhatsApp,
    alt: "WhatsApp icon",
    text: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=436605268147&text&type=phone_number&app_absent=0",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const CONTACT_LINK_LOCATION = {
  id: "location-link",
  icon: Location,
  alt: "Location icon",
  text: "Kettenbrückengasse 7, 1050 Vienna",
  href: "https://www.google.com/maps/search/Kettenbr%C3%BCckengasse+7,+1050+Vienna",
  target: "_blank",
  rel: "noopener noreferrer",
};

const Contact = () => {
  const { language } = useLanguage()
  const translation = translations[language];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    if (validationErrors[name]) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = translation.contactPage.validationErrors.nameRequired;
    if (!form.email.trim()) {
      errors.email = translation.contactPage.validationErrors.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = translation.contactPage.validationErrors.emailInvalid;
    }
    if (!form.phone.trim()) errors.phone = translation.contactPage.validationErrors.phoneRequired;
    else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
        form.phone
      )
    ) {
      errors.phone = translation.contactPage.phoneInvalid;
    }
    if (!form.message.trim()) errors.message = translation.contactPage.validationErrors.messageRequired;
    else if (form.message.trim().length < 10)
      errors.message = translation.contactPage.validationErrors.messageTooShort;
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionError(
        error.message || "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-section">
      <h1>{translation.contactUs}</h1>
      <div className="content">
        {submitted ? (
          <div className="response" role="status" aria-live="polite">
           {translation.contactPage.thankYouMessage}
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <fieldset className="fill-ins" aria-describedby="form-instructions">
              <legend id="form-instructions" className="sr-only">
                Please fill in your contact details and message. Fields marked
                with * are required.
              </legend>
              <div className="input-row">
                <label htmlFor="name-input">
                  {translation.contactPage.hiIm}
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder={translation.contactPage.namePlaceholder}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-invalid={validationErrors.name ? "true" : "false"}
                  aria-describedby={
                    validationErrors.name ? "name-error" : undefined
                  }
                  autoComplete="name"
                />
                {validationErrors.name && (
                  <p id="name-error" className="error-message" role="alert">
                    {validationErrors.name}
                  </p>
                )}
              </div>
              <div className="input-row">
                <label htmlFor="phone-input">
                  {translation.contactPage.youCanReachMeAt}
                </label>
                <input
                  id="phone-input"
                  type="tel"
                  placeholder={translation.contactPage.phonePlaceholder}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  aria-invalid={validationErrors.phone ? "true" : "false"}
                  aria-describedby={
                    validationErrors.phone ? "phone-error" : undefined
                  }
                  autoComplete="tel"
                />
                {validationErrors.phone && (
                  <p id="phone-error" className="error-message" role="alert">
                    {validationErrors.phone}
                  </p>
                )}
              </div>
              <div className="input-row">
                <label htmlFor="email-input">
                  {translation.contactPage.orAt}
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="e-mail*"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-invalid={validationErrors.email ? "true" : "false"}
                  aria-describedby={
                    validationErrors.email ? "email-error" : undefined
                  }
                  autoComplete="email"
                />
                {validationErrors.email && (
                  <p id="email-error" className="error-message" role="alert">
                    {validationErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message-textarea" className="sr-only">
                  Message:
                </label>
                <textarea
                  id="message-textarea"
                  aria-label="Message"
                  placeholder={translation.contactPage.messagePlaceholder}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  aria-invalid={validationErrors.message ? "true" : "false"}
                  aria-describedby={
                    validationErrors.message ? "message-error" : undefined
                  }
                />
                {validationErrors.message && (
                  <p id="message-error" className="error-message" role="alert">
                    {validationErrors.message}
                  </p>
                )}
              </div>
            </fieldset>
            <button className="send-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? translation.contactPage.sending : translation.contactPage.sendMessage}
              <Send className="send-icon" role="img" aria-label="Send icon" />
            </button>
            {submissionError && (
              <p className="error-message" role="alert">
                {submissionError}
              </p>
            )}
          </form>
        )}
        <div className="description">
          <h3>{translation.contactPage.planningEventHeading}</h3>
          <p>
            {translation.contactPage.planningEventHeader}
            <br />
            {translation.contactPage.planningEventBody}
          </p>
          <hr className="description-hr" />
          <p>
            <i>{translation.contactPage.getInTouchWithUsAt}</i>
          </p>
          {CONTACT_LINKS_TOP.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.target}
              rel={link.rel}
            >
              <img src={link.icon} alt={link.alt} />
              {link.text}
            </a>
          ))}
          <p>
            <i>{translation.contactPage.comeSayHello}</i>
          </p>
          <a
            key={CONTACT_LINK_LOCATION.id}
            href={CONTACT_LINK_LOCATION.href}
            target={CONTACT_LINK_LOCATION.target}
            rel={CONTACT_LINK_LOCATION.rel}
          >
            <img
              src={CONTACT_LINK_LOCATION.icon}
              alt={CONTACT_LINK_LOCATION.alt}
            />
            {CONTACT_LINK_LOCATION.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
