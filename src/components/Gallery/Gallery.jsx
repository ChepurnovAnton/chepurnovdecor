import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import styles from "./Gallery.module.css";

export default function Gallery({ items, currentPage = 1, itemsPerPage = 12 }) {
  const galleryData = items?.data ?? [];
  
  // Расчитываем индексы для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = galleryData.slice(startIndex, endIndex);

  return (
    <section>
      <ul className={styles.cards}>
        {paginatedData.map((card) => (
          <li key={card.id}>
            <GalleryCard
              id={card.id}
              name={card.name}
              url={card.picture}
              price={card.price}
              popular={card.popular}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
