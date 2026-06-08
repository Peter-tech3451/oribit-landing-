import { useState } from 'react'
import './Hero.css'
import heroPhoto1 from '../assets/Hero-photo 1.png'
import heroPhoto2 from '../assets/Hero-photo 2.png'

const Hero = () => {
  // activeFront: which photo is on top — 1 or 2
  const [activeFont, setActiveFront] = useState(2)

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering Young Minds; Through Education and Advocacy
        </h1>
        <p className="hero-desc">
          Orbit Initiatives is an Non-Governmental Organization dedicated to promoting
          education, equity, and innovation, aligning with the United Nations' Sustainable
          Development Goals (SDGs). Since our inception in 2022, we have been committed
          to creating positive change in our community through education.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Donate Now</a>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-image-stack">
        {/* {Photo 1 */}
        <div
          className={`img-card img-card-1 ${activeFont === 1 ? 'is-front' : 'is-back'}`}
          onClick={() => setActiveFront(1)}
        >
          <img src={heroPhoto1} alt="Orbit Initiatives photo 1" />
          {activeFont !== 1 && <div className="img-overlay" />}
        </div>

        {/* Photo 2 */}
        <div
          className={`img-card img-card-2 ${activeFont === 2 ? 'is-front' : 'is-back'}`}
          onClick={() => setActiveFront(2)}
        >
          <img src={heroPhoto2} alt="Orbit Initiatives photo 2" />
          {activeFont !== 2 && <div className="img-overlay" />}
        </div>
      </div>
    </section>
  )
}

export default Hero
