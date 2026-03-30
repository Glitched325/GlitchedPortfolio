import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          benji<span className="brand-dot">.</span>
        </Link>
        <nav className="nav-full">
          <InlineNavLink to="/" label="Home" />
          <InlineNavLink to="/about" label="About" />
          <InlineNavLink to="/test" label="Test" />
        </nav>
      </div>
    </header>
  )
}

function InlineNavLink({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation()
  return (
    <Link to={to} className={`nav-link${pathname === to ? ' active' : ''}`}>
      {label}
    </Link>
  )
}

export default Navbar
