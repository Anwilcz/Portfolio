import React from 'react'

const About = () => {



  return (
    <div className='wrapper column'>
      <div className='row'>
        <div className='avatar'></div>
        <article className='about'>
          <h2>About me</h2>
          <p className='description'>I have always had a passion for science and solving math puzzles, which led me to an architectural career where I could combine creative thinking with complex problem-solving. Learning design software and building visual communication through 3D models and interactive applications let me grow a strong fondness for technology and a passion for coding. Through the experience at General Assembly’s Software Engineering Bootcamp, I expanded my knowledge of programming tools. Now, I am eager to launch a new career that would help me further develop my skills and build on the foundations I learnt from the course.</p>
        </article>
      </div>
      <article className='column skills'>
        <div className='column'>
          <div className='row'>
            <h3>Knowledge of tools</h3>
          </div>
          <div className='row'>
            <div className='column half'>
              <h4 className='first'>Frontend</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='akar-icons:javascript-fill' /><p className='icon-description'>JavaScript</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='icomoon-free:html-five' /><p className='icon-description'>HTML5</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:css3' /><p className='icon-description'>CSS</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='cib:sass-alt' /><p className='icon-description'>Sass</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='akar-icons:react-fill' /><p className='icon-description'>React</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:bulma' /><p className='icon-description'>Bulma</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='vs:s-square' /><p className='icon-description'>SemanticUI</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:plotly' /><p className='icon-description'>Plotly</p></div>
              </div>
              <h4>Backend</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='akar-icons:python-fill' /><p className='icon-description'>Python</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='cib:ruby' /><p className='icon-description'>Ruby</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:express' /><p className='icon-description'>Express</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='fontisto:nodejs' /><p className='icon-description'>Node.js</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='akar-icons:django-fill' /><p className='icon-description'>Django</p></div>
              </div>
              <h4>Databases</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='cib:postgresql' /><p className='icon-description'>PostgreSQL</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:mongodb' /><p className='icon-description'>MongoDB</p></div>
              </div>
            </div>
            <div className='column half'>
              <h4>Platforms</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='cib:heroku' /><p className='icon-description'>Heroku</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='cib:netlify' /><p className='icon-description'>Netlify</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='simple-icons:mongodb' /><p className='icon-description'>Atlas</p></div>
              </div>
              <h4>Version control and package managers</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='brandico:github-text' /><p className='icon-description'>Git</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='akar-icons:github-fill' /><p className='icon-description'>Github</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:yarn' /><p className='icon-description'>Yarn</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='healthicons:p' /><p className='icon-description'>Pip</p></div>
              </div>
              <h4>Game development & design</h4>
              <div className='grid'>
                <div className='icon-tile'><i class='iconify' data-icon='cib:unity' /><p className='icon-description'>Unity3d</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:3ds-max' /><p className='icon-description'>3dsMax</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:sketchup-make' /><p className='icon-description'>SketchUp</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:adobe-photoshop' /><p className='icon-description'>Photoshop</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:adobe-illustrator' /><p className='icon-description'>Illustrator</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:adobe-indesign' /><p className='icon-description'>InDesign</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='emojione-monotone:rhinoceros' /><p className='icon-description'>Rhino</p></div>
                <div className='icon-tile'><i class='iconify' data-icon='file-icons:zbrush' /><p className='icon-description'>ZBrush</p></div>
              </div>
            </div>
          </div>
        </div>
      </article >
    </div >
  )
}
export default About