
import styles from "./Portfolio.module.css";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { useGetPortfolioQuery } from "../../store/api";
import { GalleryLoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


const Portfolio = () => {

    const { data, isLoading, isError } = useGetPortfolioQuery();
    if (isLoading) return <section className={styles.portfolioSection}><GalleryLoadingSkeleton /></section>;
    if (isError) return <ErrorMessage />;    
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
