import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import DetailPage from './pages/DetailPage'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Музична школа</h1>
      </header>

      <nav className={styles.nav}>
        <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Головна</NavLink>
        <NavLink to="/catalog" className={({isActive}) => isActive ? styles.active : ''}>Каталог</NavLink>
      </nav>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App