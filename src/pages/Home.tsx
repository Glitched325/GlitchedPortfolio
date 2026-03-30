import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'

function Home() {
  return (
    <section className="page home-page">
      <div className="home-content">
        <p className="eyebrow">Portfolio</p>
        <h2 className="home-heading">
          Hello, I'm&nbsp;<span className="accent">Benji</span>.
        </h2>
        <p className="home-sub">
          I develop websites, practice C&nbsp;+&nbsp;Python, and configure
          secure personal Linux and Windows systems.
        </p>
        <Link to="/about" className="cta-btn">About me →</Link>
      </div>
      <div className="home-deco" aria-hidden="true">
        <span className="deco-char">&lt;/&gt;</span>
      </div>
    </section>
  )
}

export default Home
