import './styles/Landing.css'

function Landing() {
  return (
    <section className="landing">
      <div className="landing__intro">
        <p className="landing__eyebrow">Hello! I'm</p>
        <h1 className="landing__name">
          <span className="landing__first">Alicia</span>
          <span className="landing__last">Fakolujo</span>
        </h1>
      </div>

      <div className="landing__roles">
        <p className="landing__eyebrow">A Hardware Engineer</p>
        <p className="landing__role">System EE Engineer</p>
        <p className="landing__role">Analog IC Design Engineer</p>
      </div>
    </section>
  )
}

export default Landing
