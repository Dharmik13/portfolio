import React, { useState } from "react";
import "../Contact/contact.css";
import contactImg from "../../assets/Contact/contactImg.png";
// import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import BlackLine from "../Black Line/BlackLine";
import Swal from "sweetalert2";
import SocialMediaIcons from "../Constant/SocialMediaIcons";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!userName) newErrors.userName = "Name is required!!!";
    if (!email) {
      newErrors.email = "Email is required!!!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid!!!";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required!!!";
    } else if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!subject) newErrors.subject = "Subject is required!!!";
    if (!message) newErrors.message = "Message is required!!!";

    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const formData = new FormData(event.target);
    formData.append("access_key", "0d16e475-d9b1-4ac4-8bf7-6a797f448f26");
    formData.set("subject", `${userName} sent a message from Your website`);

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
        setUserName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
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
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </div>

        <div className="contactRight">
          <form onSubmit={onSubmit}>
            <div className="namePhone">
              <div className="formGroup">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors.userName && <p className="error">{errors.userName}</p>}
              </div>
              <div className="formGroup">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p className="error">{errors.subject}</p>}
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows={8}
                cols={30}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="contactButton">
              <button className="btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <BlackLine />
    </section>
  );
};

export default ContactForm;
