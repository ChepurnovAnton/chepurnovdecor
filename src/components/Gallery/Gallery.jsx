import React from "react";
import GalleryCard from "../GalleryCard/GalleryCard";
import styles from "./Gallery.module.css";

export default function Gallery({ items }) {
  const galleryData = items?.data ?? [];

  return (
    <section>
      <ul className={styles.cards}>
        {galleryData.map((card) => (
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
