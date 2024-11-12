import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Surrealismo
        </h1>
        <p className="primary-text">
          Ditado do pensamento, na ausência de todo controle exercido pela razão, 
          fora de toda preocupação estética ou moral.
        </p>
        <p className="primary-text">
          Dentre as categorias observadas, são inclusas <span className="underline">Realismo mágico, Surrealismo Figurativo e Surrealismo Abstrato.</span>
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Realismo Mágico</button>
          <button className="secondary-button">Surrealismo Figurativo</button>
          <button className="secondary-button">Surrealismo Abstrato</button>
        </div>
      </div>
    </div>
  );
};

export default About;
