import styles from "./LoadingSkeleton.module.css";

// Скелетон для одной карточки в галерее
const CardSkeleton = () => (
  <div className={styles.cardSkeleton}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonContent}>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonPrice}></div>
    </div>
  </div>
);

// Скелетон для категории
const CategorySkeleton = () => (
  <div className={styles.categorySkeleton}></div>
);

// Компонент загрузки для галереи карточек
export const GalleryLoadingSkeleton = () => {
  return (
    <div className={styles.gallery}>
      {Array.from({ length: 6 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

// Компонент загрузки для категорий
export const CategoriesLoadingSkeleton = () => {
  return (
    <div className={styles.categories}>
      {Array.from({ length: 4 }).map((_, i) => (
        <CategorySkeleton key={i} />
      ))}
    </div>
  );
};

// Скелетон для деталей товара
export const ProductDetailSkeleton = () => {
  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailSkeleton}>
        {/* Кнопка "назад" */}
        <div className={styles.skeletonButton}></div>

        {/* Основной контент */}
        <div className={styles.productDetailContent}>
          {/* Левая часть - изображения */}
          <div className={styles.imageSection}>
            <div className={styles.thumbnails}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={styles.skeletonThumbnail}></div>
              ))}
            </div>
            <div className={styles.skeletonMainImage}></div>
          </div>

          {/* Правая часть - информация */}
          <div className={styles.infoSection}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonPrice}></div>

            {/* Аккордеон */}
            <div className={styles.skeletonAccordion}>
              <div className={styles.skeletonAccordionHeader}></div>
              <div className={styles.skeletonAccordionContent}>
                <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '95%' }}></div>
                <div className={styles.skeletonLine} style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Категории */}
            <div className={styles.skeletonCategories}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.skeletonCategoryBadge}></div>
              ))}
            </div>

            {/* Критерии */}
            <div className={styles.skeletonCriteria}>
              <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
              <div className={styles.skeletonLine} style={{ width: '100%' }}></div>
              <div className={styles.skeletonLine} style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
