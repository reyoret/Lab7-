import { useParams } from 'react-router-dom'
import { items } from '../data/items'

function DetailPage() {
  const { id } = useParams()
  const lesson = items.find(item => item.id === Number(id))

  if (!lesson) return <h2>Не знайдено</h2>

  return (
    <div>
      <h2>{lesson.instrument}</h2>
      <p>{lesson.teacher}</p>
      <p>{lesson.day}</p>
      <p>{lesson.time}</p>
      <p>{lesson.level}</p>
    </div>
  )
}

export default DetailPage