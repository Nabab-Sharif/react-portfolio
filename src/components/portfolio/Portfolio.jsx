import './portfolio.css'
import image1 from '../../../src/assets/images/project1.jpeg'



const data = [
  {
    id: 1,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },
  {
    id: 2,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },

  {
    id: 3,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },

  {
    id: 4,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },

  {
    id: 5,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
  },
  {
    id: 6,
    image: image1,
    title: "Todo App with React Js",
    github: 'https://github.com/Nabab-Sharif/project-10-Church-Community.git',
    demo: 'https://nabab-sharif.github.io/project-10-Church-Community/'
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
