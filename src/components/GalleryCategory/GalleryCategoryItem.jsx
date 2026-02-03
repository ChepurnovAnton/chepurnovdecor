import React from 'react'
import styles from './GalleryCategoryItem.module.css'

const GalleryCategoryItem = ({ name, active = false, onToggle = () => {} }) => {
  return (
    <li
      className={`${styles.category} ${active ? styles.active : ''}`}
      onClick={onToggle}
      role="button"
      aria-pressed={!!active}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
    >
      {name}
    </li>
  )
}

export default GalleryCategoryItem