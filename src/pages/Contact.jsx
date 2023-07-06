import React, { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [message, setMessage] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    console.log("clicked", username, emailAddress, message);
  }
  return (
    <div className="contact">
      <div className="">
        <h1>Contactez nous !</h1>
        <h2>Votre nom</h2>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <h2>Adresse email</h2>
        <input
          value={emailAddress}
          onChange={(e) => setemailAddress(e.target.value)}
          type="email"
        ></input>

        <h2>Message</h2>
        <input
          className="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <div>
          <button onClick={handleClick}>Envoyer</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
