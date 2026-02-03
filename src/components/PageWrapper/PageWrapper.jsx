import { useState, useEffect } from 'react'
import styles from './PageWrapper.module.css'

export default function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className={`${styles.page} ${visible ? styles.enter : ''}`}>
      {children}
    </div>
  )
}
