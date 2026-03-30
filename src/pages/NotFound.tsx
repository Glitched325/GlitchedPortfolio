import { Link } from 'react-router-dom'
import '../styles/pages/NotFound.css'

function NotFound() {
  return (
    <section className="page notfound-page">
      <p className="eyebrow">404</p>
      <h2 className="section-heading">Page not found.</h2>
      <p>Use the nav to find your way back.</p>
      <Link to="/" className="cta-btn" style={{ marginTop: '24px' }}>← Home</Link>
    </section>
  )
}

export default NotFound
