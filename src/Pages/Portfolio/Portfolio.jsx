import React from "react";
import styles from "./Portfolio.module.css";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { useGetPortfolioQuery } from "../../store/api";
import { GalleryLoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";


const Portfolio = () => {

    const { data, isLoading, isError } = useGetPortfolioQuery();
    if (isLoading) return <GalleryLoadingSkeleton />;
    if (isError) return <p>Ошибка загрузки данных.</p>;

    console.log(data.data);
    
  return (
    <section className={styles.portfolioSection}>
      <h1 className={styles.portfolioTitle}>Примеры моих работ на объектах и в готовом интерьере</h1>

      <div className={styles.portfolio}>
        {data.data.map((item) => (
          <PortfolioCard key={item.id} id={item.id} item={item} title={item.title} description={item.description} images={item.image} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
