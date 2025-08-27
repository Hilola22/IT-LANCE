import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <section className="form">
      <div className="container">
        <h3 className="subtitle">
          СПРОЕКТИРУЕМ <span>СИСТЕМУ ВИДЕОНАБЛЮДЕНИЯ</span>
        </h3>

        <div className="form-wrapper">
          <h2>РЕШИМ ВАШУ IT - ЗАДАЧУ</h2>
          <form>
            <div className="form-row">
              <label>
                Меня зовут
                <input type="text" placeholder="Ваше имя" />
              </label>
              <label>
                телефон
                <input type="tel" placeholder="Ваш номер телефона" />
              </label>
            </div>

            <p className="mini-text">мне нужна система видеонаблюдения для</p>
            <textarea placeholder="Пожалуйста, опишите направление Вашего Бизнеса."></textarea>

            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
