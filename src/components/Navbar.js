
import React, { useEffect, useState } from "react"





const Navbar = () => {

  const [trackerPosition, setTrackerPosition] = useState(0)
  const [links, setLinks] = useState([])
  let [activeLink, setActiveLink] = useState()
  let hoveredLink = useState()
  const [position, setPosition] = useState(window.scrollY)

  useEffect(() => {
    const container = document.querySelector('.container')
    container.addEventListener('scroll', (event) => {
      setPosition(event.target.scrollTop)
    })
  })

  useEffect(() => {
    const height = window.innerHeight
    let index = 0
    if (links.length) {
      if (position >= 0 && position < height) {
        setActiveLink(links[0])
        index = 0
      } else if (position >= height && position < 2 * height) {
        setActiveLink(links[1])
        index = 1
      } else if (position >= 2 * height && position < 3 * height) {
        setActiveLink(links[2])
        index = 2
      } else if (position >= 3 * height && position < 4 * height) {
        setActiveLink(links[3])
        index = 3
      } else {
        setActiveLink(links[4])
        index = 4
      }
      setTrackerPosition(links[index].offsetLeft - links[0].offsetLeft)
      links.forEach(link => link.classList.remove('highlighted'))
      links[index].classList.add('highlighted')
    }
  }, [position, links])

  const moveTracker = (event) => {
    hoveredLink = event.target
    links.forEach(link => link.classList.remove('highlighted'))
    hoveredLink.classList.add('highlighted')
    const offsetLeft = event.target.offsetLeft
    const firstElementOffset = document.querySelector('.nav-link').offsetLeft
    setTrackerPosition(offsetLeft - firstElementOffset)
  }

  const returnTracker = () => {
    links.forEach(link => link.classList.remove('highlighted'))
    activeLink ? activeLink.classList.add('highlighted') : links[0].classList.add('highlighted')
  }

  const changeLinkColor = (event) => {
    links.forEach(link => link.classList.remove('highlighted'))
    const currentLink = event.target
    setActiveLink(currentLink)
    currentLink.classList.add('highlighted')
  }

  const preserveColor = () => {
    const firstElementOffset = document.querySelector('.nav-link').offsetLeft
    setTrackerPosition(activeLink ? activeLink.offsetLeft - firstElementOffset : 0)
  }

  useEffect(() => {
    // const container = document.querySelector('.container')
    // container.addEventListener('scroll', (event) => { printthis(event.target) })
    const navLinks = document.querySelectorAll('.nav-link')
    setLinks(navLinks)
  }, [])

  useEffect(() => {
    const addTrackerEvent = () => {
      const navbar = document.querySelector('.navbar')
      navbar.addEventListener('mouseleave', preserveColor)
      links.forEach(link => {
        link.addEventListener('mouseenter', (event) => { moveTracker(event) })
        link.addEventListener('mouseleave', (event) => { returnTracker(event) })
        link.addEventListener('click', (event) => changeLinkColor(event))
      })

    }
    addTrackerEvent()
  })


  return (
    <nav className='navbar'>
      <div id='track' />
      <a className='nav-link highlighted' href='#intro'>Intro
        <div id='tracker' style={{ transform: `translateX(${trackerPosition}px)` }} />
      </a>
      <a className='nav-link' href='#about'>About</a>
      <a className='nav-link' href='#projects'>Projects</a>
      <a className='nav-link' href='#interests'>Interests</a>
      <a className='nav-link' href='#contact'>Contact</a>
    </nav>
  )
}
export default Navbar