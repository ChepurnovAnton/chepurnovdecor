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
              Я предоставляю услуги по нанесению декоративных покрытий и
              покраске безвоздушным способом.
            </span>
            <span className={styles.aboutDescription}>
              В работе я использую материалы премиального качества марок:
              Derufa, Decorazza, что гарантирует высокое качество результата.
            </span>
            <span className={styles.aboutDescription}>
              Большой выбор фактур под любой стиль и помещения
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
            <span className={styles.featureText}>Лет на рынке</span>
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
            src="public/2019-10-04 20-41-09.JPG"
            alt="Антон Чепурнов - Декоративная штукатурка"
            className={styles.aboutImage}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
