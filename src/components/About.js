import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="section light" id="about">
      <div className="content">
        <h1>O mnie</h1>
        <p>
          Przygotowuję strony internetowe przyjazne użytkownikom. Wykorzystuję
          React, Gatsby oraz Wordpress.
        </p>
        <p>
          Mogę stworzyć m.in. stronę firmową, bloga, landing page, witrynę
          projektu, interaktywny raport.
        </p>
        <p>
          W zależności od potrzeb przygotuję nową stronę z indywidualnym
          projektem graficznym albo dostosuję istniejący szablon do Twoich
          celów. Gotową stronę umieszczę na serwerze pod wybranym przez Ciebie
          adresem.
        </p>

        <div className="btn-container">
          <Link to="/#contact" className="btn">
            Do dzieła!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
