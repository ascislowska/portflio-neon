import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="section light" id="about">
      <div className="content text">
        <h1>About</h1>
        <p>
          I have been working for years as a IT project manager. For two years
          I&rsquo;ve been interested in front-end development. I&rsquo;ve
          learned the basics of HTML, CSS and JavaScript, completed 30-days
          JavaScript challenge and online courses of React, Redux and Gatsby.
          Recently I've graduated Typescript Bootcamp.
        </p>
        <h2>Skills</h2>
        <p className="tags">
          <span>React</span>
          <span>Typescript</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS/Sass</span>
          <span>Gatsby</span>
          <span>Redux</span>
          <span>mobX</span>
          <span>GIT</span>
          <span>SQL</span>
        </p>
        <p>
          As a project mamanger I&rsquo;ve worked with graphic designers (real
          artists), scientific researchers, bunch of developers, famous
          journalists and scared trainees &ndash; I definitely can communicate
          with people.
        </p>

        <div className="btn-container">
          <Link to="/#contact" className="btn">
            Let's talk
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
