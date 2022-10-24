import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
const Error = () => {
  return (
    <Layout>
      <div className="section light">
        <h3>Strona, której szukasz nie istnieje</h3>
        <Link to="/" className="btn">
          Start
        </Link>
      </div>
    </Layout>
  )
}

export default Error
