import React from "react";
import hero from "../../assets/hero-image.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-wrapper__text">
            <h1>Проектирование и установка систем видеонаблюдения</h1>
            <p>Защитите свой бизнес от неожиданных сбоев!</p>
            <button>Узнать больше</button>
          </div>
          <div className="hero-wrapper__image">
            <img src={hero} alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
