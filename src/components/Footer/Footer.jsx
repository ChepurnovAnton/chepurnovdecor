import { Link } from 'react-router-dom';
import { BsInstagram, BsFacebook, BsTwitterX, BsYoutube } from 'react-icons/bs';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ЛЕВАЯ ЧАСТЬ - БРЕНД И ОПИСАНИЕ */}
        <div className={styles.leftSection}>
          <h2 className={styles.brandName}>Chepurnov Decor</h2>
          <p className={styles.description}>
            Я предлагаю широкий спектр услуг по декоративной штукатурке и отделке, от простых работ до полного преобразования интерьера вашего дома.
          </p>
          {/* СОЦИАЛЬНЫЕ ИКОНКИ */}
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" className={styles.socialIcon} aria-label="Instagram">
              <BsInstagram size={20} />
            </a>

          </div>
        </div>

        {/* ЦЕНТРАЛЬНАЯ ЧАСТЬ - ССЫЛКИ */}
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Навигация</h3>
            <ul className={styles.linksList}>
              <li>
                <Link to="/" className={styles.link}>Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className={styles.link}>Каталог</Link>
              </li>
              <li>
                <Link to="/portfolio" className={styles.link}>Портфолио</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ - КОНТАКТЫ */}
        <div className={styles.contactSection}>
          <h3 className={styles.columnTitle}>Контакты</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>
              <span className={styles.label}>Адрес:</span>
              <span>Барнаул, Алтайский край</span>
            </p>
            <p className={styles.contactItem}>
              <span className={styles.label}>Email:</span>
              <a href="mailto:info@chepurnov-decor.ru" className={styles.contactLink}>
                info@chepurnov-decor.ru
              </a>
            </p>
            <p className={styles.contactItem}>
              <span className={styles.label}>Телефон:</span>
              <a href="tel:+79999999999" className={styles.contactLink}>
                +7 (999) 999-99-99
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ - COPYRIGHT */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2026 Chepurnov Decor. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;