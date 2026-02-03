import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaFacebook, FaWhatsapp, FaVimeo } from "react-icons/fa";

// Адаптивный мобильный хедер с бургер-меню
// - На десктопе (> 768px): стандартное горизонтальное меню
// - На мобильных (≤ 768px): бургер-кнопка с выпадающим меню в 2-колонной сетке
// - Меню автоматически закрывается при клике на ссылку
const Header = () => {
  // Состояние скролла для стилизации хедера при прокрутке
  const [isScrolled, setIsScrolled] = useState(false);
  // Состояние открытого/закрытого состояния мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    // Отслеживание скролла страницы для изменения стиля хедера
    // При скролле > 20px хедер становится белым с тенью
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Эффект для блокировки скролла при открытии мобильного меню
  useEffect(() => {
    if (isMenuOpen) {
      // Заблокировать скролл страницы
      document.body.style.overflow = "hidden";
    } else {
      // Разблокировать скролл страницы
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Закрытие мобильного меню при клике на ссылку
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isHome ? styles.home : styles.notHome}`}
      >
        <div className={styles.content}>
          <Link to="/" className={styles.title} onClick={closeMenu}>
            chepurnov decor
          </Link>
          
          {/* Бургер-кнопка: видна только на мобильных (max-width: 768px) */}
          {/* Переключается между иконкой бургер-меню (закрыто) и крестиком (открыто) */}
          <button
            className={`${styles.burgerButton} ${isMenuOpen ? styles.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? (
              <MdClose size={28} />
            ) : (
              <GiHamburgerMenu size={28} />
            )}
          </button>

          {/* Основное навигационное меню: видно только на десктопе (> 768px) */}
          <nav className={styles.nav}>
            <Link to="/catalog" className={styles.navLink}>
              Каталог
            </Link>
            <Link to="/portfolio" className={styles.navLink}>
              Портфолио
            </Link>
            <div className={styles.navLink}>
              <div className={styles.phoneContainer}>
                <BsTelephone />
                <span>+7 (995) 216-18-07</span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Мобильное выпадающее меню: видно только на мобильных (max-width: 768px) */}
      {/* Закрывается автоматически при клике на ссылку или за его пределами */}
      {/* Использует 2-колонную сетку для компактного отображения элементов меню */}
      {isMenuOpen && (
        <>
          {/* Затемняющий overlay - закрывает меню при клике */}
          <div className={styles.menuOverlay} onClick={closeMenu}></div>
          
          <nav className={styles.mobileMenu}>
          <div className={styles.mobileMenuGrid}>
            <Link to="/catalog" className={styles.mobileMenuItem} onClick={closeMenu}>
              Каталог
            </Link>
            <Link to="/portfolio" className={styles.mobileMenuItem} onClick={closeMenu}>
              Портфолио
            </Link>
            <a href="tel:+79952161807" className={styles.mobileMenuItem} onClick={closeMenu}>
              Позвонить
            </a>
          </div>
          
          {/* Социальные сети в мобильном меню */}
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://wa.me/79952161807" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} title="Vimeo">
              <FaVimeo />
            </a>
          </div>
        </nav>
        </>
      )}
    </>
  );
};

export default Header;
