import React, { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function ContactForm (){
    const form = useRef();

    const [contact, setContact] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
    });

    // const SERVICE_ID = "service_uepnjdn";
    // const TEMPLATE_ID = "template_0gvs4ed";
    // const USER_ID = "user_2Zq1TAO7WgmZnV6Z3QyLA";

    const handleSubmit = (value) => 
    {
        var templateParams = {
            senderName: contact.user_name,
            senderEmail: contact.user_email,
            senderSubject: contact.subject,
            senderMessage: contact.message
        }

            alert(templateParams.senderName);

            // const serviceID = 'default_service';
            // const templateID = 'template_0gvs4ed';
         
            emailjs.sendForm('service_uepnjdn', 'template_0gvs4ed', form.current, "user_2Zq1TAO7WgmZnV6Z3QyLA")
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
            });

        }

    const handleChange = (event) => 
    {
        const {name, value} = event.target;
        
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
        <Container>
            <h1 className="ContactTitle">Lets get in touch</h1>
            <div className="ContactContainer">
                    <col-6>
                        <Row>
                            <td>
                                <Row className="contactRow">
                                    <p className="informationTitle"><img className="contactIcon" src="../images/contactLocation.png" alt=""/>Address</p>
                                </Row>
                                <Row>
                                    <p className="informationText">Victoria, Australia</p>
                                </Row>
                            </td>
                        </Row>
                        <Row>
                            <td>
                            <Row className="contactRow">
                            <p className="informationTitle"><img className="contactIcon" src="../images/contactPhone.png" alt=""/>Phone</p>
                                </Row>
                                <Row>
                                    <p className="informationText">+61 488 440 874</p>
                                </Row>
                            </td>
                        </Row>
                        <Row>
                            <td>
                            <Row className="contactRow">
                                <p className="informationTitle"><img className="contactIcon" src="../images/contactEmail.png" alt=""/>Email</p>
                                </Row>
                                <Row>
                                    <p className="informationText">michael_powell1989@hotmail.com</p>
                                </Row>
                            </td>
                        </Row>
                        <Row>
                            <td>
                            <Row className="contactRow">
                                <p className="informationTitle" ><img className="contactIcon" src="../images/linkedinOutline.png" style={{paddingBottom: "15px"}} alt=""/>Linked In</p>
                                </Row>
                                <Row>
                                    <a href="https://www.linkedin.com/in/michael-powell-38870333"><p className="informationText">/michael-powell-38870333</p></a>
                                </Row>
                            </td>
                        </Row>
                    </col-6>
                <div className="ContactForm">
                    <form id="form" ref={form} onSubmit={handleSubmit}>
                        <label className="inputTitle" for="name">Your Name</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="user_name"
                            className="feedback-input"
                            placeholder="Name"
                            value={contact.user_name}/>

                        <label className="inputTitle" for="email">Your Email</label>
                        <input
                            onChange={handleChange}
                            type="email"
                            name="user_email"
                            className="feedback-input"
                            placeholder="Email" 
                            value={contact.user_email}/>

                        <label className="inputTitle" for="subject">Subject</label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="subject"
                            className="feedback-input"
                            placeholder="Subject"
                            value={contact.subject}/>

                        <label className="inputTitle" for="message">Message</label>
                        <textarea
                            onChange={handleChange}
                            name="message"
                            className="feedback-input"
                            placeholder="Lets chat"
                            value={contact.message}/>

                        <button
                            className="submitButton"
                            disabled={!contact.user_name || !contact.user_email || !contact.subject || !contact.message}
                            type="submit" value="Send">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
        </div>
      );
}

export default ContactForm;

