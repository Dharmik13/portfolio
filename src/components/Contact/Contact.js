import React from "react";
import "../Contact/contact.css";
import ContactForm from "./ContactForm";

const contact = () => {
  return (
    <section id="contact">
      <div className="header">
        <div className="headDesc">Contact</div>
        <div className="heading">Contact With Me</div>
      </div>

      <ContactForm />
    </section>
  );
};

export default contact;
