// Структурированные данные для Schema.org

// Общие данные организации
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chepurnov Decor",
  "url": "https://chepurnov-decor.ru",
  "description": "Профессиональные услуги декоративной штукатурки и внутренней отделки",
  "telephone": "+7 (995) 216-18-07",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Барнаул",
    "addressCountry": "RU",
    "addressRegion": "Алтайский край"
  },
  "sameAs": [
    "https://instagram.com",
    "https://facebook.com",
    "https://vimeo.com"
  ],
  "image": "https://chepurnov-decor.ru/logo.jpg",
  "foundingDate": "2012"
};

// Данные для товара (Product)
export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description || `Профессиональное покрытие ${product.name}`,
  "image": product.picture?.[0]?.url || "https://chepurnov-decor.ru/product-default.jpg",
  "offers": {
    "@type": "Offer",
    "price": product.price,
    "priceCurrency": "RUB",
    "availability": "https://schema.org/InStock"
  },
  "category": product.categories?.[0]?.name || "Декоративные покрытия"
});

// Данные для страницы с контактами/организацией
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Chepurnov Decor",
  "description": "Профессиональные услуги декоративной штукатурки и внутренней отделки",
  "url": "https://chepurnov-decor.ru",
  "telephone": "+7 (995) 216-18-07",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressRegion": "Алтайский край",
    "addressLocality": "Барнаул"
  },
  "areaServed": {
    "@type": "State",
    "name": "Алтайский край"
  }
};

// Данные для Breadcrumb навигации
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// FAQ структурированные данные
export const faqSchema = [
  {
    "@type": "Question",
    "name": "Какие виды декоративной штукатурки вы используете?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Мы работаем с более чем 100+ видами текстур и покрытий от ведущих производителей."
    }
  },
  {
    "@type": "Question",
    "name": "Сколько стоит услуга декоративной штукатурки?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Стоимость зависит от типа покрытия и объема работ. Расчет делается индивидуально."
    }
  },
  {
    "@type": "Question",
    "name": "Сколько лет опыта у компании?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Компания работает в области декоративной отделки уже более 12 лет."
    }
  }
];
