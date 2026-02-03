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
