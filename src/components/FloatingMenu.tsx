import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/FloatingMenu.css'

function FloatingMenu() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/',      label: 'Home'  },
    { to: '/about', label: 'About' },
    { to: '/test',  label: 'Test'  },
  ]

  return (
    <div className={`floating-nav${visible ? ' floating-nav--visible' : ''}`}>
      {/* The three lines of the hamburger icon */}
      <div className="floating-pill">
        <span className="hline" />
        <span className="hline" />
        <span className="hline" />

        <div className="floating-dropdown">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} label={label} active={pathname === to} />
          ))}
        </div>
      </div>
    </div>
  )
}

function NavLink({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link to={to} className={`nav-link${active ? ' active' : ''}`}>
      {label}
    </Link>
  )
}

export default FloatingMenu
