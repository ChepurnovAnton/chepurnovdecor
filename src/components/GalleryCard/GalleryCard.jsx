
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { MdOutlineZoomOutMap } from "react-icons/md";
import styles from './GalleryCard.module.css'



const GalleryCard = ({ id, url, name, price, popular }) => {
  const images = url || [];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImageUrl = images[currentImageIndex]?.url;

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none' }}
      onClick={() => {
        try {
          sessionStorage.setItem('catalogScrollPosition', String(window.scrollY || 0));
        } catch (e) {
          // ignore
        }
      }}
    >
      <article className={styles.card}>
      <div 
        className={styles.imageWrapper}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          className={styles.img} 
          src={'https://api.chepurnovdecor.ru/' + currentImageUrl} 
          alt={name} 
        />
        {/* Иконка лупы при наведении */}
        <div className={styles.searchIcon}>
          <MdOutlineZoomOutMap color='white' size={50} />
        </div>

        {/* Мобильный слайдер - точки навигации */}
        {images.length > 1 && (
          <div className={styles.sliderDots}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${
                  idx === currentImageIndex ? styles.activeDot : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToImage(idx);
                }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {popular && <span className={styles.popular}>Популярное покрытие</span>}
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>от {price} ₽/м²</span>
    </article>
    </Link>
  );
};

export default GalleryCard;
