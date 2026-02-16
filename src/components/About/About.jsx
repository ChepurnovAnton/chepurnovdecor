import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTextBlock}>
          <p className={styles.aboutTitle}>Обо мне</p>
          <div className={styles.aboutText}>
            <p className={styles.aboutName}>
              <b>Чепурнов Антон</b>
            </p>
            <p className={styles.aboutSubtitle}>
              Мастер по декоративным покрытиям и безвоздушной покраске
            </p>

            <p className={styles.aboutDescription}>
              Я выполняю работы по нанесению <b>декоративных покрытий</b> и{" "}
              <b>покраске безвоздушным способом</b>. В своей работе использую
              премиальные материалы <b>Derufa</b>, что гарантирует
              долговечность, экологичность и безупречное качество результата.
            </p>

            <p className={styles.aboutDescription}>
              Предлагаю широкий выбор фактур для любых интерьеров:{" "}
              <b>венецианская штукатурка</b>, <b>фактурная штукатурка</b>,{" "}
              <b>имитация мрамора и скалы</b>, <b>бетон</b>, {" "}
              <b>декоративные краски</b> и другие современные декоративные
              решения.
            </p>

            <p className={styles.aboutDescription}>
              Регулярно обновляю ассортимент текстур, следуя актуальным
              тенденциям дизайна интерьеров. Это позволяет создавать уникальные
              покрытия, которые подчёркивают стиль и характер вашего
              пространства.
            </p>

            <div className={styles.benefitsList}>
              <p className={styles.benefitItem}>
                <BsCheck size={25} />
                <b>Бесплатная консультация и выезд на замер</b>
              </p>
              <p className={styles.benefitItem}>
                <BsCheck size={25} /> <b>Помощь в подборе фактуры и цвета</b>
              </p>
              <p className={styles.benefitItem}>
                <BsCheck size={25} />{" "}
                <b>Подготовка поверхности при необходимости</b>
              </p>
              <p className={styles.benefitItem}>
                <BsCheck size={25} />{" "}
                <b>Все работы выполняю лично, без посредников</b>
              </p>
            </div>

            <p className={styles.guarantee}>
              Гарантирую аккуратность, соблюдение сроков и внимание к деталям на
              каждом этапе.
            </p>
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
