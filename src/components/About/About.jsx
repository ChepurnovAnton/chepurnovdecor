import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTextBlock}>
          <p className={styles.aboutTitle}>Обо мне</p>
          <div className={styles.aboutText}>
            <span className={styles.aboutName}>Меня зовут Чепурнов Антон</span>
            <span className={styles.aboutDescription}>
              Я предоставляю услуги по нанесению <b>декоративных покрытий</b> и
              <b> покраске безвоздушным способом</b>.
            </span>
            <span className={styles.aboutDescription}>
              В работе я использую материалы премиального качества марки:
              <b> Derufa</b>, что гарантирует высокое
              качество результата.
            </span>
            <span className={styles.aboutDescription}>
              Большой выбор фактур под любой стиль и помещения:{" "}
              <b>венецианская, марроканская, травертин, бетон, шелк</b> и многое
              другое.
            </span>
            <span className={styles.aboutDescription}>
              Регулярное обновление текстур, которые соответсвуют современным тенденциям в дизайне интерьеров.
            </span>
            <span className={styles.aboutDescription}>
              <b>Бесплатная консультация и замер</b>, а также помощь в подборе
              фактуры и цвета.
            </span>
            <span className={styles.aboutDescription}>
              При необходимости делаю <b>подготовку поверхности</b> для
              декоративных покрытий.
            </span>
            <span className={styles.aboutDescription}>
              Вся работа выполняется мной лично, никаких посредников и
              посторонних лиц.
            </span>
            <div className={styles.buttonGroup}>
              <Link to={"/portfolio"}>
                <button className={styles.portfolioButton}>
                  Посмотреть портфолио
                </button>
              </Link>
              <Link to={"/catalog"}>
                <button className={styles.catalogButton}>
                  Перейти в каталог
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>12</span>
            <span className={styles.featureText}>Лет опыта</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>500+</span>
            <span className={styles.featureText}>Выполненных проектов</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>100+</span>
            <span className={styles.featureText}>Различных фактур</span>
          </div>
        </div>

        <div className={styles.featureImg}>
          <img
            src="/2019-10-04 20-41-09.JPG"
            alt="Антон Чепурнов - Декоративная штукатурка"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
