import '../styles/pages/TestPage.css'

function TestPage() {
  const blocks = Array.from({ length: 14 }, (_, i) => i + 1)
  return (
    <section className="page test-page">
      <p className="eyebrow">Scroll test</p>
      <h2 className="section-heading">Long page — scroll down</h2>
      <p className="about-bio">
        Scroll down to watch the navbar disappear naturally. Once you've
        passed it, a small pill appears in the top-right corner — hover
        over it and the nav menu fades in below.
      </p>
      <div className="test-blocks">
        {blocks.map(n => (
          <div key={n} className="test-block">
            <span className="test-num">{String(n).padStart(2, '0')}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestPage
