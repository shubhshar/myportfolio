import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [regform, setRegform] = useState({
    user_name: "",
    user_email: "",
    user_mobile: "",
    user_subject: "",
    message: ""
  });
  // const [rec, setRec] = useState([]);
  const formRef = useRef();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setRegform({ ...regform, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fkwpw2p",
        "template_l5mvoab",
        formRef.current,
        "c8OTsXPEr21F4lRyP"
      )
      .then(
        (result) => {
          console.log("fafsaf" + result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setRegform({ ...regform });
    console.log(regform);
    // const newRec = { ...regform };
    // setRec([...rec, newRec]);
    // console.log(rec);
    setRegform({
      user_name: "",
      user_email: "",
      user_subject: "",
      user_mobile: "",
      message: ""
    });
  };
  return (
    <>
      <div className="c">
        {/* <div className="c-bg"></div> */}
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-left-title">Let's discuss projects</h1>
            <div className="c-info">
              <div className="c-info-item">
                {/* <img src={Phone} alt="phoneIcon" className="c-icon" />
                +91&nbsp;78#######2 */}
              </div>
              <div className="c-info-item">
                <img src={Email} alt="phoneIcon" className="c-icon" />
                shubhr0813@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="phoneIcon" className="c-icon" />
                Azamgarh, Uttar Pradesh
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story ? </b>
              Get in touch. I am ready to work if the right project comes along.
            </p>
            <form action="" ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                value={regform.user_name}
              />
              {/* <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                required
                onChange={handleChange}
                value={regform.user_subject}
              /> */}
              <input
                type="number"
                name="user_mobile"
                placeholder="Contact No"
                required
                onChange={handleChange}
                value={regform.user_mobile}
              />
              <input
                type="text"
                name="user_email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={regform.user_email}
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={regform.message}
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
