import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://scratchcateringmail.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };



  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="App4">
      <div className="containersc">

        <Row>
          <Col>
            <div className="">
              <p className="">CONTACT ME </p>
              <form className="" onSubmit={handleSubmit}>
                <div className="">
                  <label className="form5" htmlFor="name">Name:</label>
                  <input className="form" type="text" placeholder="name..." id="name" required />
                </div>
                <div className="">
                  <label className="form5" htmlFor="email">Email:</label>
                  <input className="form" type="email" placeholder="e-mail..." id="email" required />
                </div>
                <div className="">
                  <label className="form5" htmlFor="phone">Phone Number:</label>
                  <input className="form" type="tel" placeholder="phone number..." id="phone" required />
                </div>
                <div className="">
                  <label className="form5" htmlFor="message">Message:</label>
                  <textarea className="form" placeholder="..." id="message" required />
                </div>
                <button type="submit">{status}</button>
              </form>
            </div>
            <br/><br/><br/><br/><br/>
          </Col>
          
          <Col>
         
            <div  className="containersc">
              <p className="">Schedule a consolation to figure out a one time fee to get your idea on the web. </p>
              <p >
                <i class="bi bi-envelope-fill">kennethpsinclair@yahoo.com</i>
              </p>
              <p >
                <i class="bi bi-telephone-outbound-fill">(315) 730-5708</i>
              </p>

              <p>
                <i class="bi bi-facebook"><a href="https://www.facebook.com/scratchfarmhousecatering">facebook</a></i>
              </p>
              </div>

          
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;