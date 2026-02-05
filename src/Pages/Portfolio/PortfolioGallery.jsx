import React, { useState, useEffect, useCallback } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from "./PortfolioGallery.module.css"
import { useGetPortfolioQuery } from "../../store/api"
import { MdOutlineZoomOutMap } from "react-icons/md";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const PortfolioGallery = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const stateItem = location.state && location.state.item
  const { data, isLoading, isError } = useGetPortfolioQuery();
  
  // Импорт ErrorMessage добавится отдельно

  let item = stateItem
  if (!item && data && data.data) {
    item = data.data.find((p) => String(p.id) === String(id))
  }

  // вычислим безопасно массив изображений до хуков
  const images = (item && (item.image || item.images)) || []

  // хуки должны быть вызваны всегда, до любых return
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => setModalOpen(false)

  const showPrev = useCallback(
    () => setCurrentIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0)),
    [images.length]
  )
  const showNext = useCallback(
    () => setCurrentIndex((i) => (images.length ? (i + 1) % images.length : 0)),
    [images.length]
  )

  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [modalOpen, showPrev, showNext])

  if (isLoading) return <p>Загрузка...</p>
  if (isError) return <ErrorMessage />;
  if (!item) return <p>Элемент не найден.</p>

  return (
    <section className={styles.gallerySection}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Вернуться в портфолио
      </button>
      <h1 className={styles.title}>{item.title || item.name}</h1>
      <p className={styles.description}>{item.description}</p>

      <div className={styles.imagesGrid}>
        {images.map((img, idx) => {
          const src = img.url || (img && img[0] && img[0].url) || ""
          return (
            <div key={idx} className={styles.imageWrap}>
              <img
                src={src}
                alt={`${item.title || item.name} ${idx + 1}`}
                onClick={() => openModal(idx)}
              />

            </div>
          )
        })}
      </div>

      {modalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
        >
          <button
            className={styles.modalClose}
            onClick={closeModal}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className={styles.modalPrev}
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className={styles.modalContent}>
            {images[currentIndex] && (
              <img
                className={styles.modalImage}
                src={
                  images[currentIndex].url ||
                  (images[currentIndex] && images[currentIndex][0] && images[currentIndex][0].url) ||
                  ""
                }
                alt={`Preview ${currentIndex + 1}`}
              />
            )}
          </div>
          <button
            className={styles.modalNext}
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default PortfolioGallery
