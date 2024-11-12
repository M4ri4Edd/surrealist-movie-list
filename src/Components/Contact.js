import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Envie suas</h1>
      <h1 className="primary-heading">Sugestões</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button">Envie</button>
      </div>
    </div>
  );
};

export default Contact;
