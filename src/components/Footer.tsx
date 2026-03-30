import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Benjamin Henderson</span>
        <a
          href="https://github.com/glitched325"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer
