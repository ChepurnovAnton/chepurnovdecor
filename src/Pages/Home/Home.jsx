import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import About from "../../components/About/About";
import Stages from "../../components/Stages/Stages";

const Home = () => {
  return (
    <>
      
      <div className={styles.home}>
        <div className={styles.hero}>
              <div className={styles.heroInner}>
                <img
                  src="/home.jpg"
                  alt="Chepurnov Decor - Декоративная штукатурка"
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
        <Stages/>
      </div>
    </>
  );
};

export default Home;
