import './VisionMission.css'

const VisionMission = () => {
  return (
    <section className="vision-mission" id="about">
      <h2>Vision and Mission</h2>

      <div className="vm-card">
        <h3>Mission Statements:</h3>
        <ol>
          <li>I. Unlocking youth potential</li>
          <li>II. Promoting equity</li>
          <li>III. Fostering inclusive communities</li>
          <li>IV. Education and advocacy</li>
          <li>V. Empowering young people</li>
        </ol>
      </div>

      <div className="vision-block">
        <h3>Vision Statement:</h3>
        <p>
          A future where every young person has the opportunity to reach their full
          potential, regardless of their background or circumstances, and contributes
          to a more just, equitable, and prosperous world.
        </p>
      </div>

      <div className="values-block">
        <span className="values-label">Our Values</span>
        <p className="values-list">
          - Education for All - Equity and Inclusion - Innovation and Creativity - Community Engagement - Empowerment and Empathy
        </p>
      </div>
    </section>
  )
}

export default VisionMission
