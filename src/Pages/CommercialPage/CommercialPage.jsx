import React from "react";
import styles from "./CommercialPage.module.css";

const CommercialPage = () => {
  return (
    <section className={styles.commercialPage}>
      <p className={styles.commercialPageIntro}>
        Предлагаю сотрудничество дизайнерам интерьеров и прорабам, которым важны
        стабильное качество, точное попадание в концепцию проекта и спокойная
        реализация без сюрпризов.
      </p>
      <p className={styles.commercialPageIntro}>
        Так же предлагаю щедрый бонус от стоимости работы.
      </p>

      <ul className={styles.commercialPageList}>
        <li>Декоративные штукатурки любых уровней сложности</li>
        <li>
          Точное повторение образцов, т.к образцы и объекты делаются одной рукой
        </li>
        <li>Соблюдение сроков </li>
        <li>Бережное отношение к уже выполненной отделке</li>
        <li>Выезд на объект и консультация</li>
        <li>Изготовление тестовых выкрасов</li>
      </ul>

      <p className={styles.commercialPageIntro}>
        Буду рад долгосрочному сотрудничеству и совместным проектам.
      </p>
      <p className={styles.commercialPageIntro}>
        Бонус за предоставленный объект обсуждается индивидуально.
      </p>
    </section>
  );
};

export default CommercialPage;
