import React from "react";
import styles from "./Stages.module.css";

const steps = [
  {
    number: "01",
    title: "Знакомство и обсуждение проекта",
    desc: "Обсудим ваш проект и пожелания по декоративной штукатурке",
  },
  {
    number: "02",
    title: "Выбор нанесения",
    desc: "В каталоге вы можете ознакомиться с образцами нанесения, выбрать понравившиеся и обсудить их со мной. Встретимся с вами лично, чтобы вы могли увидеть образцы вживую, задать вопросы и определиться с выбором",
  },
  {
    number: "03",
    title: "Замер и оценка подготовки поверхности",
    desc: "После выбора образца я выезжаю на объект, оцениваю состояние поверхности и делаю замер для точного расчета стоимости и сроков выполнения работ",
  },
  {
    number: "04",
    title: "Изготовление индивидуального образца",
    desc: "На основе выбранного образца и состояния поверхности я изготавливаю индивидуальный образец, который максимально точно повторяет итоговый результат. Это позволяет вам увидеть конечный результат до начала работ и при необходимости внести коррективы",
  },
  {
    number: "05",
    title: "Утверждаем образец и подписываем договор",
    desc: "После утверждения образца устанавливаем сроки выполнения работ и подписываем договор, в котором прописаны все договоренности по качеству, срокам и стоимости",
  },
  {
    number: "06",
    title: "Начало выполнения работ",
    desc: "Приступаю к выполнению работ, соблюдая все договоренности по срокам и качеству",
  },
];

const Stages = () => {
  return (
    <>
      <h3 className={styles.stagesTitle}>Этапы работ</h3>
      <section className={styles.container} aria-label="Этапы работы">
        <div className={styles.verticalLine} aria-hidden="true" />
        {steps.map((s) => (
          <React.Fragment key={s.number}>
            <div className={styles.number}>{s.number}</div>

            <div className={styles.centerCell} aria-hidden="true">
              <span className={styles.dot} />
            </div>

            <div className={styles.content}>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default Stages;
