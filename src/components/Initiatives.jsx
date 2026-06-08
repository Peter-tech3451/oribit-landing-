import { useState } from 'react'
import './Initiatives.css'

import youthSummit from '../assets/youth-summit.png'
import menstrualHealth from '../assets/menstrual-health.png'
import shoesNeedy from '../assets/shoes-needy.png'
import schoolMaterials from '../assets/school-materials.png'

const initiatives = [
  {
    id: 1,
    title: 'Youth Summit',
    year: '2022',
    description: 'Organized our first youth summit in collaboration with the Redeemer\'s University Student Association.',
    image: youthSummit,
  },
  {
    id: 2,
    title: 'Menstrual Health Education',
    year: '2022',
    description: 'Coordinated a community outreach to sensitize secondary school students on the importance of education and menstrual health to young girls.',
    image: menstrualHealth,
  },
  {
    id: 3,
    title: 'Shoes for the Needy',
    year: '2023',
    description: 'Collaborated with NYSC Servicom CDS group (Mowe sub-office) to provide shoes for over 50 underprivileged primary school students in Obafemi/Owode LG, Ogun State.',
    image: shoesNeedy,
  },
  {
    id: 4,
    title: 'School Materials',
    year: '2024',
    description: 'Provided school materials to 30 underprivileged primary school pupils in a local primary school in Ogun State.',
    image: schoolMaterials,
  },
]

const VISIBLE = 4

const Initiatives = () => {
  const [start, setStart] = useState(0)

  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(initiatives.length - VISIBLE, s + 1))

  const visible = initiatives.slice(start, start + VISIBLE) 

  return (
    <section className="initiatives" id="initiatives">
      <h2 className="section-title">Our Impactful Initiatives</h2>
      <p className="section-sub">
        Explore some of the projects where your support has made a significant difference,
        from local communities to global endeavors.
      </p>

      <div className="carousel-wrapper">
        <button className="carousel-btn" onClick={prev} disabled={start === 0}>&#8249;</button>

        <div className="cards-row">
          {visible.map((item) => (
            <div className="initiative-card" key={item.id}>
              <div className="card-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-body">
                <span className="card-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={next} disabled={start >= initiatives.length - VISIBLE}>&#8250;</button>
      </div>
    </section>
  )
}

export default Initiatives
