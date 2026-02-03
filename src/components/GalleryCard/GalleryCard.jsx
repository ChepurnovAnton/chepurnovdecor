
import { Link } from 'react-router-dom';
import { MdOutlineZoomOutMap } from "react-icons/md";
import styles from './GalleryCard.module.css'



const GalleryCard = ({ id, url, name, price, popular }) => {
  const imageUrl = url?.[0]?.url;

  if (!imageUrl) {
    return null;
  }

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
      <div className={styles.imageWrapper}>
        <img className={styles.img} src={imageUrl} alt={name} />
        {/* Иконка лупы при наведении */}
        <div className={styles.searchIcon}>
          <MdOutlineZoomOutMap color='white' size={50} />
        </div>
      </div>
      {popular && <span className={styles.popular}>Популярное покрытие</span>}
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>от {price}₽/м2</span>
    </article>
    </Link>
  );
};

export default GalleryCard;
