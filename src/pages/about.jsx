import React from "react"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
      <h1>Dark Sky</h1> 
      <ul>
      <li><a href="/">Home</a></li>
      <li><a class="active" href="/about">DarkSky Info</a></li>
      <li><a href="/openweather">Weather</a></li>
      </ul>
      <p><img src = "http://www.clker.com/cliparts/y/s/e/B/Z/B/night-sky-hi.png"alt = "DarkSky"></img></p>
  </Layout>
) 
