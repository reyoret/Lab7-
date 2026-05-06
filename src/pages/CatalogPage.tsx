import { useEffect, useState } from 'react'
import { items } from '../data/items'
import LessonCard from '../components/LessonCard'
import type { Lesson } from '../types'
import styles from './CatalogPage.module.css'

function CatalogPage() {
  const [selectedInstrument, setSelectedInstrument] = useState('Усі')
  const [visibleLessons, setVisibleLessons] = useState<Lesson[]>(items)

  useEffect(() => {
    if (selectedInstrument === 'Усі') {
      setVisibleLessons(items)
    } else {
      setVisibleLessons(
        items.filter(item => item.instrument === selectedInstrument)
      )
    }
  }, [selectedInstrument])

  return (
    <div className={styles.page}>
      <h2>Каталог занять</h2>

      <div className={styles.filterBox}>
        <label>Інструмент:</label>
        <select onChange={(e) => setSelectedInstrument(e.target.value)}>
          <option>Усі</option>
          <option>Фортепіано</option>
          <option>Гітара</option>
          <option>Скрипка</option>
          <option>Вокал</option>
        </select>
      </div>

      <div className={styles.grid}>
        {visibleLessons.map(item => (
          <LessonCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CatalogPage