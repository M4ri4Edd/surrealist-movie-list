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
          <a href="https://www.todamateria.com.br/realismo-magico/" target="_blank" rel="noopener noreferrer">
            <button className="secondary-button">Realizmo Mágico</button>
          </a>
          <a href="https://www.todamateria.com.br/arte-figurativa/" target="_blank" rel="noopener noreferrer">
          <button className="secondary-button">Surrealismo Figurativo</button>
          </a>
          <a href="https://www.todamateria.com.br/abstracionismo/" target="_blank" rel="noopener noreferrer">
          <button className="secondary-button">Surrealismo Abstrato</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
