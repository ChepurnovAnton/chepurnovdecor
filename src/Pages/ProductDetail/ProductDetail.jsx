import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetGalleryQuery } from "../../store/api";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState("description");
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const { data, isLoading, error } = useGetGalleryQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <ErrorMessage />;

  const product = data?.data?.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Товар не найден</h2>
        <button
          onClick={() => {
            sessionStorage.setItem(
              "catalogScrollPosition",
              String(window.scrollY || 0),
            );
            navigate("/catalog");
          }}
          className={styles.backButton}
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const images = product.picture || [];
  const currentImage = images[activeImageIndex];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const toggleAccordion = (section) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <>
      <div className={styles.container}>
        <button
          onClick={() => {
            try {
              const existing = sessionStorage.getItem("catalogScrollPosition");
              if (!existing) {
                // only set if not already saved by clicking a gallery card
                sessionStorage.setItem(
                  "catalogScrollPosition",
                  String(window.scrollY || 0),
                );
              }
            } catch (e) {
              console.log(e);
            }
            navigate("/catalog");
          }}
          className={styles.backButton}
        >
          <IoIosArrowRoundBack size={20} className={styles.backIcon} />
          Вернуться в каталог
        </button>

        <article className={styles.product}>
          <div className={styles.imageSection}>
            {images.length > 1 && (
              <div className={styles.thumbnails}>
                {images.map((pic, index) => (
                  <button
                    key={index}
                    className={`${styles.thumbnail} ${activeImageIndex === index ? styles.active : ""}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img
                      src={"https://api.chepurnovdecor.ru/" + pic.url}
                      alt={`${product.name} ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
            {currentImage && (
              <div className={styles.mainImageContainer}>
                <img
                  src={"https://api.chepurnovdecor.ru/" + currentImage.url}
                  alt={product.name}
                  className={styles.productImage}
                  onClick={() => setIsImageEnlarged(true)}
                  style={{ cursor: "pointer" }}
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className={styles.prevButton}
                      aria-label="Предыдущее изображение"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={handleNextImage}
                      className={styles.nextButton}
                      aria-label="Следующее изображение"
                    >
                      &#10095;
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{product.name}</h1>

            <div className={styles.priceContainer}>
              <span className={styles.price}>От {product.price} ₽/м²</span>
              <span className={styles.priceInfo}>
                *Стоимость зависит от площади покрытия, колеровки и конструкции
                поверхности
              </span>
            </div>

            <div className={styles.accordion}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion("description")}
              >
                <span>Описание</span>
                <span
                  className={`${styles.accordionIcon} ${expandedAccordion === "description" ? styles.expanded : ""}`}
                >
                  ▼
                </span>
              </button>
              {expandedAccordion === "description" && (
                <div className={styles.accordionContent}>
                  <p className={styles.descriptionText}>
                    {product.description || "Описание товара отсутствует"}
                  </p>
                  <div className={styles.preparationSection}>
                    <p className={styles.preparationText}>
                      Требуемая подготовка поверхности:
                    </p>
                    <p className={styles.preparation}>
                      {product.preparation || "Информация отсутствует"}
                    </p>
                  </div>

                  <div className={styles.exploitationSection}>
                    <p className={styles.exploitationLabel}>
                      Эксплуатационные характеристики:
                    </p>
                    <p className={styles.exploitationValue}>
                      {product.exploitation || "Информация отсутствует"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {product.categories && product.categories.length > 0 && (
              <div className={styles.categoriesContainer}>
                <span className={styles.categoriesLabel}>Категории:</span>

                <div className={styles.categories}>
                  {product.categories.map((cat) => (
                    <span key={cat.id} className={styles.categoryBadge}>
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.criteriaSection}>
              <span className={styles.criteriaLabel}>Расшифровка критериев подготовки поверхности:</span>
              <span>
                Q1(базовый): Заделка стыков ГКЛ, подходит для очень толстой
                фактуры (например, "Скала")
              </span>

              <span>
                Q2(стандарт): Чистовое шпатлевание с видимыми следами от
                образива, подходит для фактур средней толщины
              </span>
              <span>
                Q3(повышенный): Чистовое шпатлевание с полностью отшлифованной
                поверхностью, допускаются незначительные следы от образива. Подходит для тонких фактур и декоративных красок
              </span>

              <span>
                Q4(высокий): Чистовое шпатлевание с идеально отшлифованной
                поверхностью, подходит для механизированной покраски и очень
                тонких фактур
              </span>
            </div>
            {/* {product.popular && (
              <div className={styles.popularBadge}>★ Популярное покрытие</div>
            )} */}
          </div>
        </article>

        {/* Модальное окно увеличенного изображения */}
        {isImageEnlarged && (
          <div
            className={styles.imageModal}
            onClick={() => setIsImageEnlarged(false)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={() => setIsImageEnlarged(false)}
                aria-label="Закрыть"
              >
                <IoIosClose size={30} />
              </button>
              <img
                src={"https://api.chepurnovdecor.ru/" + currentImage?.url}
                alt={product.name}
                className={styles.enlargedImage}
              />
              {images.length > 1 && (
                <>
                  <button
                    className={styles.modalPrevButton}
                    onClick={handlePrevImage}
                    aria-label="Предыдущее изображение"
                  >
                    &#10094;
                  </button>
                  <button
                    className={styles.modalNextButton}
                    onClick={handleNextImage}
                    aria-label="Следующее изображение"
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
