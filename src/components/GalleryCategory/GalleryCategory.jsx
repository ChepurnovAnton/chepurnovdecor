import React from "react";
import GalleryCategoryItem from "./GalleryCategoryItem";
import styles from "./GalleryCategory.module.css";



const GalleryCategory = ({ categories, selectedCategoryId, onSelectCategory }) => {
  const handleSelectCategory = (id) => {
    onSelectCategory((prev) => (prev === id ? null : id));
  };


  return (
    <section>
      <ul className={styles.categories}>
        {categories?.map((category) => (
          <GalleryCategoryItem
            key={category.id}
            name={category.name}
            active={category.id === selectedCategoryId}
            onToggle={() => handleSelectCategory(category.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default GalleryCategory;
