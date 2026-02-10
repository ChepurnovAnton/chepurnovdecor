import { useNavigate } from 'react-router-dom'

import styles from './PortfolioCard.module.css'

const PortfolioCard = ({ id, item, title, images }) => {
    const image = images && images.length > 0 ? images[0].url : '';
    const navigate = useNavigate();

    const handleOpen = () => {
        // save scroll position to restore if needed
        try { sessionStorage.setItem('portfolioScrollPosition', String(window.scrollY || 0)); } catch (e) { /* ignore */ }
        navigate(`/portfolio/${id}`, { state: { item } });
    };

  return (
    <article className={styles.portfolioCard} onClick={handleOpen} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') handleOpen(); }}>
        <div className={styles.portfolioCardContent}>
            <h3 className={styles.portfolioCardTitle}>{title}</h3>
        </div>
        <img className={styles.portfolioCardImage}  src={'https://api.chepurnovdecor.ru/' + image} alt="Portfolio Card Image" />
    </article>
  )
}

export default PortfolioCard