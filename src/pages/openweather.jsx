import React from "react"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>Gatsby Weather App</h1> 
    <p>IT338 - Ricardo Calderon</p>
    <ul>
      <li><a  href="/">Home</a></li>
      <li><a  href="/about">DarkSky Info</a></li>
      <li><a class="active" href="/openweather">Weather</a></li>
    </ul>
      <p><img src = "http://az837918.vo.msecnd.net/publishedimages/articles/147/en-US/images/1/dark-sky-adventures-in-jasper-national-park-L-6.jpg" alt = "openweather"></img></p>
  </Layout>
)