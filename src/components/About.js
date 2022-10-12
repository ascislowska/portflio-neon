import React from "react"
import { Link } from "gatsby"

const About = () => {
  return (
    <div className="section light" id="about">
      <div className="description">
        <h1>O mnie</h1>
        <p>
          Przygotowuję strony internetowe przyjazne użytkownikom. Wykorzystuję
          React, Gatsby oraz Wordpress.
        </p>
        <p>
          Potrzebna Ci strona firmowa, blog, landing page, witryna projektu,
          interaktywna prezentacja danych a może masz inny pomysł? Pomogę.
        </p>
        <p>
          Mogę stworzyć nową stronę z indywidualnym projektem graficznym albo
          dostosować istniejący szablon do Twoich potrzeb. Gotową stronę
          umieszczę na serwerze pod wybranym przez Ciebie adresem.
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
