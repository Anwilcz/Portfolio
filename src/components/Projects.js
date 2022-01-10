import React from 'react'

const Projects = () => {



  return (
    <div className='wrapper column'>
      <div className='row project'>
        <div className='column'>
          <div className='project-image project1' />
        </div>
        <div className='column'>
          <h3>Project: Developer Insights - Django and React App</h3>
          <div className='links'>
            <a href='https://dev-insights.herokuapp.com' target='blank'>View deployment</a><span> | </span>
            <a href='https://github.com/Anwilcz/SEI-Project-4-59' target='blank'><i class='iconify' data-icon='akar-icons:github-fill' /> GitHub</a>
          </div>
          <p className='description'>Full-stack application with a React frontend and a Django backend, implementing RESTful API.</p>
          <article className='column skills technology-used'>
            <h4 className='first'>Technologies used:</h4>
            <div className='grid'>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:javascript-fill' /><p className='icon-description'>JavaScript</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:react-fill' /><p className='icon-description'>React</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:python-fill' /><p className='icon-description'>Python</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:django-fill' /><p className='icon-description'>Django</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='cib:sass-alt' /><p className='icon-description'>Sass</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:plotly' /><p className='icon-description'>Plotly</p></div>
            </div>
          </article>
        </div>
      </div>

      <div className='row project'>
        <div className='column'>
          <div className='project-image project2' />
        </div>
        <div className='column'>
          <h3>Project: Airbnb Experience - MERN Application</h3>
          <div className='links'>
            <a href='https://airbnb-experience.herokuapp.com' target='blank'>View deployment</a><span> | </span>
            <a href='https://github.com/Anwilcz/SEI-Project-3-59' target='blank'><i class='iconify' data-icon='akar-icons:github-fill' /> GitHub</a>
          </div>
          <p className='description'>Full-stack application with Express and Node.js backend and React frontend, serving data from the MongoDB.</p>
          <article className='column skills technology-used'>
            <h4 className='first'>Technologies used:</h4>
            <div className='grid'>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:javascript-fill' /><p className='icon-description'>JavaScript</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:react-fill' /><p className='icon-description'>React</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:express' /><p className='icon-description'>Express</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='fontisto:nodejs' /><p className='icon-description'>Node.js</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:css3' /><p className='icon-description'>CSS</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:bulma' /><p className='icon-description'>Bulma</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='vs:s-square' /><p className='icon-description'>SemanticUI</p></div>
            </div>
          </article>
        </div>
      </div>

      <div className='row project'>
        <div className='column'>
          <div className='project-image project3' />
        </div>
        <div className='column'>
          <h3>Project: Pacman - Grid-based game.</h3>
          <div className='links'>
            <a href='https://anwilcz.github.io/SEI-Project-1-59' target='blank'>View deployment</a><span> | </span>
            <a href='https://github.com/Anwilcz/SEI-Project-1-59' target='blank'><i class='iconify' data-icon='akar-icons:github-fill' /> GitHub</a>
          </div>
          <p className='description'>Grid-based game rendered in browser, developed with JavaScript and DOM manipulation. </p>
          <article className='column skills technology-used'>
            <h4 className='first'>Technologies used:</h4>
            <div className='grid'>
              <div className='icon-tile'><i class='iconify' data-icon='akar-icons:javascript-fill' /><p className='icon-description'>JavaScript</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='icomoon-free:html-five' /><p className='icon-description'>HTML5</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:css3' /><p className='icon-description'>CSS</p></div>
            </div>
          </article>
        </div>
      </div>

      <div className='row project'>
        <div className='column'>
          <div className='project-image project4' />
        </div>
        <div className='column'>
          <h3>Project: Crypto Zone - React Application</h3>
          <div className='links'>
            <a href='https://crypto-project-sei.netlify.app' target='blank'>View deployment</a><span> | </span>
            <a href='https://github.com/Anwilcz/SEI-Project-2-59' target='blank'><i class='iconify' data-icon='akar-icons:github-fill' /> GitHub</a>
          </div>
          <p className='description'>Multi-view React application that consumes a public API.</p>
          <article className='column skills technology-used'>
            <h4 className='first'>Technologies used:</h4>
            <div className='grid'>
              <div className='icon-tile'><i class='iconify' data-icon='icomoon-free:html-five' /><p className='icon-description'>HTML5</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:css3' /><p className='icon-description'>CSS</p></div>
              <div className='icon-tile'><i class='iconify' data-icon='simple-icons:bulma' /><p className='icon-description'>Bulma</p></div>
            </div>
          </article>
        </div>
      </div>




    </div>


  )
}
export default Projects