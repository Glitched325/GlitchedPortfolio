import '../styles/pages/About.css'

function About() {
  const skills = [
    'Web Development','Python','C','Java','C++','Rust','Swift',
    'Linux','Windows Security',
  ]
  return (
    <section className="page about-page">
      <p className="eyebrow">About me</p>
      <h2 className="section-heading">Benjamin Henderson</h2>
      <p className="about-bio">
        My name is Benjamin Henderson, and I go by Benji. I've been practicing
        web development, Python, C, and system security for many years while
        also dabbling in other languages such as Java, C++, Rust, Swift, and a
        few others — primarily as a hobby. I'm always eager to learn more and
        apply my skills.
      </p>
      <div className="skills-grid">
        {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
      </div>
    </section>
  )
}

export default About
