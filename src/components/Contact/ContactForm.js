import React from "react";
import "../Contact/contact.css";
import contactImg from "../../assets/Contact/contactImg.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import BlackLine from "../Black Line/BlackLine";
import Swal from "sweetalert2";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const userName = document.getElementById("name").value;
    const formData = new FormData(event.target);

    formData.append("access_key", "0d16e475-d9b1-4ac4-8bf7-6a797f448f26");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: `Thank You Dear ${userName}`,
        text: "Your Message Sent Successfully!",
        icon: "success",
      }).then(() => {
        // Clear form fields
        document.querySelector("form").reset();
      });
    }
  };
  return (
    <section>
      <div className="contactContainer">
        <div className="contactLeft">
          <div className="contactImg">
            <img src={contactImg} alt="projectImg" />
          </div>

          <div className="contactInfo">
            <div className="developerName">Dharmik Patel</div>
            <div className="developerRole">MERN Stack Developer</div>
            <div className="developerDesc">
              I'm a graduate student from Charotar University of Science and
              Technology, Anand. I completed my B.tech-IT(Information
              Technology) Form this Collage. My area of interest is MERN Stack
              Web development. I have Knowledge of MERN Technologies. But I
              don't want to bound my Knowledge, I want to keep refresh my
              Knowledge and stay updated with this IT field.
            </div>
            <div className="developerNumber">Phone: +918200354124</div>
            <div className="developerEmail">
              Email: pateldharmik096@gmail.com
            </div>

            <div className="icon">
              <h2 className="contacticonHeader">FIND ME IN</h2>
              <div className="contactIcon">
                <span className="ContactbannerIcon">
                  <FaFacebookF />
                </span>
                <span className="ContactbannerIcon">
                  <FaTwitter />
                </span>
                <span className="ContactbannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="contactRight">
          <form onSubmit={onSubmit}>
            <div className="namePhone">
              <div className="formGroup">
                <label htmlFor="name">your name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="formGroup">
                <label htmlFor="number">Phone Number</label>
                <input type="text" id="number" name="number" />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="formGroup">
              <label htmlFor="message">message</label>
              <textarea name="message" rows={8} cols={30} />
            </div>

            <div className="contactButton">
              <button className="btn">send message</button>
            </div>
          </form>
        </div>
      </div>

      <BlackLine />
    </section>
  );
};

export default ContactForm;
