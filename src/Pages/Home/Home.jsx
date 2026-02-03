import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import About from "../../components/About/About";

const Home = () => {
  return (
    <>
      
      <div className={styles.home}>
        <div className={styles.hero}>
              <div className={styles.heroInner}>
                <img
                  src="/6d0d3395656f6e2154ada51cd6b60c30_0_1.jpeg.jpg"
                  alt="Chepurnov Decor - Дизайн интерьера"
                  className={styles.heroImage}
                />
                
                <div className={styles.heroContent}>
                  <h1 className={styles.heroTitle}>Декоративная штукатурка</h1>
                  <p className={styles.heroSubtitle}>
                    Профессиональное нанесение декоративных покрытий в Барнауле и
                    Алтайском крае
                  </p>
                  <Link to="/catalog" className={styles.heroButton}>
                    Перейти в каталог
                  </Link>
                </div>
              </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
