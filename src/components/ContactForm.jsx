import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import copyConsts from "../copyConsts.json"

function ContactForm() {
  const form = useRef();
  const [contactForm, setContactForm] = useState(false);

  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (value) => {

    emailjs
      .sendForm(
        "service_4biylnj",
        "template_2k3p4f6",
        form.current,
        "Bh-qOe5zllkY8rBt6"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setContactForm(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      {contactForm ? (
        <Container>
            <div className="ContactContainer">
                <h1 className="contactTitle">{copyConsts.emailResponse}</h1>
            </div>
        </Container>
      ) : (
        <>
        <h1 className="contactTitle">{copyConsts.CTA}</h1>
        <Container className="contactContainer">
          <div className="ContactContainer">
            <col-6>
              <Row>
                <td>
                  <Row className="contactRow">
                    <p className="informationTitle">
                      <img
                        className="contactIcon"
                        src="./images/contactLocation.png"
                        alt=""
                      />
                      {copyConsts.addressTitle}
                    </p>
                  </Row>
                  <Row>
                    <p className="informationText">{copyConsts.addressLocation}</p>
                  </Row>
                </td>
              </Row>
              <Row>
                <td>
                  <Row className="contactRow">
                    <p className="informationTitle">
                      <img
                        className="contactIcon"
                        src="./images/contactPhone.png"
                        alt=""
                      />
                      {copyConsts.phoneTitle}
                    </p>
                  </Row>
                  <Row>
                    <p className="informationText">{copyConsts.phoneNumber}</p>
                  </Row>
                </td>
              </Row>
              <Row>
                <td>
                  <Row className="contactRow">
                    <p className="informationTitle">
                      <img
                        className="contactIcon"
                        src="./images/contactEmail.png"
                        alt=""
                      />
                      {copyConsts.myEmailTitle}
                    </p>
                  </Row>
                  <Row>
                    <p className="informationText">
                      {copyConsts.myEmailAddress}
                    </p>                    
                    <p className="informationText">
                      {copyConsts.myEmailHost}
                    </p>
                  </Row>
                </td>
              </Row>
              <Row>
                <td>
                  <Row className="contactRow">
                    <p className="informationTitle">
                      <img
                        className="contactIcon"
                        src="./images/linkedinOutline.png"
                        style={{ paddingBottom: "15px" }}
                        alt=""
                      />
                      {copyConsts.LinkedInTitle}
                    </p>
                  </Row>
                  <Row>
                    <a href="https://www.linkedin.com/in/michael-powell-38870333">
                      <p className="informationText">
                        {copyConsts.LinkedInURL}
                      </p>
                    </a>
                  </Row>
                </td>
              </Row>
            </col-6>
            <div className="ContactForm">
              <form id="form" ref={form} onSubmit={handleSubmit}>
                <label className="inputTitle" for="name">
                  {copyConsts.nameTitle}
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="user_name"
                  className="feedback-input"
                  placeholder="Name"
                  value={contact.user_name}
                />

                <label className="inputTitle" for="email">
                  {copyConsts.emailTitle}
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="user_email"
                  className="feedback-input"
                  placeholder="Email"
                  value={contact.user_email}
                />

                <label className="inputTitle" for="subject">
                  {copyConsts.subjectTitle}
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="subject"
                  className="feedback-input"
                  placeholder="Subject"
                  value={contact.subject}
                />

                <label className="inputTitle" for="message">
                  {copyConsts.messageTitle}
                </label>
                <textarea
                  onChange={handleChange}
                  name="message"
                  className="feedback-input"
                  placeholder="Lets chat"
                  value={contact.message}
                />

                <button
                  className="submitButton"
                  disabled={
                    !contact.user_name ||
                    !contact.user_email ||
                    !contact.subject ||
                    !contact.message
                  }
                  type="submit"
                  value="Send"
                >
                  {copyConsts.sendButton}
                </button>
              </form>
            </div>
          </div>
        </Container>
        </>
      )}
    </>
  );
}

export default ContactForm;
