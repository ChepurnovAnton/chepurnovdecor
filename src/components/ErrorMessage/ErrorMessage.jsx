import styles from "./ErrorMessage.module.css";
import { MdError } from "react-icons/md";

const ErrorMessage = ({ message = "Ошибка загрузки данных. Пожалуйста, перезагрузите страницу" }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <MdError className={styles.errorIcon} />
        <h2 className={styles.errorTitle}>Упс! Что-то пошло не так</h2>
        <p className={styles.errorMessage}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
