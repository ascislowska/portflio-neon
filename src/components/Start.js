import React from "react"
import { Link } from "gatsby"

const Start = () => {
  const particles = []
  for (let i = 0; i < 100; i++) {
    const className = `particle particle-${i}`
    particles.push(className)
  }
  return (
    <section id="start" className="section dark">
      <h2 className="name">Anna Ścisłowska</h2>
      <h1 className="motto">Tworzę strony internetowe.</h1>
      <Link to="/#contact" className="btn">
        Kontakt
      </Link>
      {particles.map(particle => (
        <div className={particle} key={particle}></div>
      ))}
    </section>
  )
}

export default Start
