import React from "react";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  icon1,
  microphone,
  sensor,
  brightness,
  data,
  video,
} from "../../assets/index.js";
import "./Cards.scss";

const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards-wrapper">
          <div className="cards-wrapper__text">
            <h2>Возможности</h2>
          </div>
          <div className="cards-wrapper__card">
            <div className="card">
              <div className="card-image">
                <img src={card1} alt="" />
                <div>
                  <img src={icon1} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Видеонаблюдение через интернет</h4>
                <p>
                  Для онлайн доступа к камерам достаточно иметь доступ к
                  Интернету на объекте. Подключившись удаленно к системе
                  видеонаблюдения можно просматривать видео и запись в режиме
                  времени.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={card2} alt="" />
                <div>
                  <img src={microphone} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Запись звука</h4>
                <p>
                  Наличие микрофона поможет проанализировать качество
                  обслуживания персонала, прослушать разговоры няни и
                  репетиторов с детьми, детально разобраться в случае
                  возникновения конфликта.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={card3} alt="" />
                <div>
                  <img src={sensor} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Детектор движения</h4>
                <p>
                  Видеокамеры способны определять движение объектов. Это важно,
                  когда нужно движения или обозначить границы, при пересечении
                  которых система оповестит об этом.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={card4} alt="" />
                <div>
                  <img src={video} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Просмотр архивных видеозаписей</h4>
                <p>
                  Видео с каждой камеры записывается отдельно. Зная
                  приблизительно, когда и где произошло интересующее Вас
                  событие, без труда можно найти на жесткий диск компьютера или
                  на флеш-карту.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={card5} alt="" />
                <div>
                  <img src={brightness} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Запись видео в полной темноте</h4>
                <p>
                  При снижении освещенности в помещении или на улице видеокамеры
                  переходят в ночной режим съемки. Даже при съемке в темноте
                  качество видео остается на очень высоком уровне.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={card6} alt="" />
                <div>
                  <img src={data} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Видеоконтроль и защита от краж</h4>
                <p>
                  Никакая охрана не обеспечит круглосуточный контроль витрин,
                  складов, зон погрузки/разгрузки транспорта. Но система
                  видеонаблюдения станет хорошим инструментом для службы
                  безопасности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
