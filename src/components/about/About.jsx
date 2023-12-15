import './about.css'
import Image from '../../../src/assets/images/about.png';
import { FiAward } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";



const About = () => {
  return (
    <>
      <section id='about'>
        <h5>Get To know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>

          <div className='about_me'>
            <div className='about_me_image'>
              <img src={Image} alt="about.png" />
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              {/* about card start here */}
              <article className='about__card'>
                <FiAward className='about__icon' />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              {/* about card end here */}

              {/* about card start here */}
              <article className='about__card'>
                <FaUserTie className='about__icon' />
                <h5>Clients</h5>
                <small>50+ Worldwide</small>
              </article>
              {/* about card end here */}

              {/* about card start here */}
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
              {/* about card end here */}

            </div>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos pariatur voluptatibus voluptatem! Quidem quod necessitatibus nobis alias molestiae est nisi sit provident magnam. Eos cupiditate quibusdam laudantium repudiandae ab? Accusamus!</p>
            <a href="#contact" className='btn btn-primary' >Lets Talk</a>
          </div>

        </div>

      </section>
    </>
  )
}

export default About
