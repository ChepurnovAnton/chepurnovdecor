import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetGalleryQuery } from '../../store/api';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState('description');
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const { data, isLoading, error } = useGetGalleryQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных.</p>;

  const product = data?.data?.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Товар не найден</h2>
        <button
          onClick={() => {
            sessionStorage.setItem('catalogScrollPosition', String(window.scrollY || 0));
            navigate('/catalog');
          }}
          className={styles.backButton}
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const images = product.picture || [];
  const currentImage = images[activeImageIndex];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => {
            try {
              const existing = sessionStorage.getItem('catalogScrollPosition');
              if (!existing) {
                // only set if not already saved by clicking a gallery card
                sessionStorage.setItem('catalogScrollPosition', String(window.scrollY || 0));
              }
            } catch (e) {
              // ignore storage errors
            }
            navigate('/catalog');
          }}
          className={styles.backButton}
        >
          ← Вернуться в каталог
        </button>

      <article className={styles.product}>
        <div className={styles.imageSection}>
          {images.length > 1 && (
            <div className={styles.thumbnails}>
              {images.map((pic, index) => (
                <button
                  key={index}
                  className={`${styles.thumbnail} ${activeImageIndex === index ? styles.active : ''}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={pic.url} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
          {currentImage && (
            <div className={styles.mainImageContainer}>
              <img 
                src={currentImage.url} 
                alt={product.name} 
                className={styles.productImage}
                onClick={() => setIsImageEnlarged(true)}
                style={{ cursor: 'pointer' }}
              />
              {images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className={styles.prevButton} aria-label="Предыдущее изображение">
                    &#10094;
                  </button>
                  <button onClick={handleNextImage} className={styles.nextButton} aria-label="Следующее изображение">
                    &#10095;
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.priceContainer}>
            <span className={styles.price}>₽{product.price}</span>
          </div>

          <div className={styles.accordion}>
            <button 
              className={styles.accordionHeader}
              onClick={() => toggleAccordion('description')}
            >
              <span>Описание</span>
              <span className={`${styles.accordionIcon} ${expandedAccordion === 'description' ? styles.expanded : ''}`}>
                ▼
              </span>
            </button>
            {expandedAccordion === 'description' && (
              <div className={styles.accordionContent}>
                <p>{product.description || 'Описание товара отсутствует'}</p>
              </div>
            )}
          </div>

          {product.categories && product.categories.length > 0 && (
            <div className={styles.categoriesContainer}>
              <span className={styles.categoriesLabel}>Категории:</span>
              <div className={styles.categories}>
                {product.categories.map((cat) => (
                  <span key={cat.id} className={styles.categoryBadge}>{cat.name}</span>
                ))}
              </div>
            </div>
          )}

          {product.popular && (
            <div className={styles.popularBadge}>★ Популярное покрытие</div>
          )}
        </div>
      </article>

      {/* Модальное окно увеличенного изображения */}
      {isImageEnlarged && (
        <div
          className={styles.imageModal}
          onClick={() => setIsImageEnlarged(false)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setIsImageEnlarged(false)}
              aria-label="Закрыть"
            >
              ✕
            </button>
            <img
              src={currentImage?.url}
              alt={product.name}
              className={styles.enlargedImage}
            />
            {images.length > 1 && (
              <>
                <button
                  className={styles.modalPrevButton}
                  onClick={handlePrevImage}
                  aria-label="Предыдущее изображение"
                >
                  &#10094;
                </button>
                <button
                  className={styles.modalNextButton}
                  onClick={handleNextImage}
                  aria-label="Следующее изображение"
                >
                  &#10095;
                </button>
              </>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default ProductDetail;
