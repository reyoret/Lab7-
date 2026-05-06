import { useNavigate } from 'react-router-dom'
import type { Lesson } from '../types'
import styles from './LessonCard.module.css'

function LessonCard({ item }: { item: Lesson }) {
  const navigate = useNavigate()

  return (
    <div className={styles.card}>
      <h3>{item.instrument}</h3>
      <p>{item.teacher}</p>
      <p>{item.day} — {item.time}</p>
      <p>{item.level}</p>

      <button className={styles.button} onClick={() => navigate(`/${item.id}`)}>
        Детальніше
      </button>
    </div>
  )
}

export default LessonCard