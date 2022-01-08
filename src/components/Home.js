import React from "react"
import About from "./About"


const Home = () => {



  return (
    <div className='container'>
      <section id='intro'></section>
      <section id='about'>
        <About />
      </section>
      <section id='projects'></section>
      <section id='interests'></section>
      <section id='contact'></section>
    </div >
  )
}
export default Home