import React from "react"
import Layout from "../components/Layout"
import Start from "../components/Start"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <Layout>
      <Start />
      <About />
      <Portfolio />
      <Contact />
    </Layout>
  )
}

export default Home
