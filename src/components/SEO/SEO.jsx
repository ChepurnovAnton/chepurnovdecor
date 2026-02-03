import { Helmet } from "react-helmet-async";

// Компонент для управления SEO метаданными
const SEO = ({
  title = "Chepurnov Decor - Декоративная штукатурка и отделка интерьеров",
  description = "Профессиональные услуги декоративной штукатурки и внутренней отделки. Более 12 лет опыта, более 500 завершенных проектов.",
  keywords = "декоративная штукатурка, отделка интерьера, внутренние работы, покрытия",
  image = "https://chepurnov-decor.ru/og-image.jpg",
  url = "https://chepurnov-decor.ru",
  type = "website",
  author = "Chepurnov Decor",
}) => {
  return (
    <Helmet>
      {/* Основные мета теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical tag */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph теги для социальных сетей */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Chepurnov Decor" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Дополнительные теги */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Russian" />
    </Helmet>
  );
};

export default SEO;
