import React from 'react'
import About from './About'
import Intro from './Intro'
import Projects from './Projects'
import Contact from './Contact'
import Interests from './Interests'


const Home = () => {



  return (
    <div className='container'>
      <section id='intro'>
        <Intro />
      </section>
      <section id='about'>
        <About />
        <div className='mask mask-about' />
      </section>
      <section id='projects'>
        <div className='mask mask-projects' />
        <Projects />
      </section>
      <section id='interests'>
        <div className='mask mask-interests' />
        <Interests />
      </section>
      <section id='contact'>
        <div className='mask mask-contact' />
        <Contact />
      </section>
    </div >
  )
}
export default Home