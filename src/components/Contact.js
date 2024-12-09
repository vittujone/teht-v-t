import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [canSend, setCanSend] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!canSend) {
      alert("Please wait 3 minutes before sending another message.");
      return;
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "f4e42599-9b86-4110-8bff-332351e97605");

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
      console.log("Success", res);
      setShowPopup(true);
      setCanSend(false);

      setTimeout(() => { // voi lähettää uuden viestin joka 3 minuuttia/180000millisekunttia
        setCanSend(true);
      }, 180000);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="Contact">
      <form onSubmit={onSubmit}>
        <h2>Inquiries Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={!canSend}>
          {canSend ? "Send Message" : "Please Wait..."}
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Message Sent Successfully!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
