import './portfolio.css'
import image1 from '../../../src/assets/images/project1.jpeg'
import image2 from '../../../src/assets/images/project2.jpeg'
import image3 from '../../../src/assets/images/project3.jpeg'
import image4 from '../../../src/assets/images/project4.jpeg'
import image5 from '../../../src/assets/images/project5.jpeg'


const data = [
  {
    id: 1,
    image: image1,
    title: "Agency-Project with HTM-CSS-Bootstrap-Responsive",
    github: 'https://github.com/Nabab-Sharif/project-4-Agency.git',
    demo: 'https://nabab-sharif.github.io/project-4-Agency/'
  },
  {
    id: 2,
    image: image2,
    title: "Church-Community Project with HTML-CSS-JS-Responsive",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },

  {

    id: 3,
    image: image3,
    title: "Fruit-Finder with HTML-CSS-JS-DOM-Responsive",
    github: 'https://github.com/Nabab-Sharif/JS-Project-4-Fruit-Finder.git',
    demo: 'https://nabab-sharif.github.io/JS-Project-4-Fruit-Finder/'
  },

  {
    id: 4,
    image: image4,
    title: "CRUD App with HTML-CSS-JS-DOM-OOP-Responsive",
    github: 'https://github.com/Nabab-Sharif/JS-Project-9-Todo-List-OOP-Based-CRUD-Apllication.git',
    demo: 'https://nabab-sharif.github.io/JS-Project-9-Todo-List-OOP-Based-CRUD-Apllication/'
  },

  {
    id: 5,
    image: image5,
    title: "Local Restaurant with HTML-CSS-Bootstrap-Responsive",
    github: 'https://github.com/Nabab-Sharif/project-6-Local-Restaurant.git',
    demo: 'https://nabab-sharif.github.io/project-6-Local-Restaurant/'
  },

]


const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>

          {
            data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className='portfolio_item'>
                  <div className='portfolio_item_image'>
                    <img src={image} alt="project.jpg" />
                  </div>

                  <h3>{title}</h3>
                  <div className="portfolio_item_cta">
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary'>Live Demo</a>
                  </div>
                </article>
              )
            })
          }

        </div>

      </section>
    </>
  )
}

export default Portfolio
