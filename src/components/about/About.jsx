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
            <p>I’m a junior front-end developer and like to code in my spare time. Using HTML, CSS, and JavaScript, I have expertise in creating responsive websites. I have also worked with well-known frontend frameworks like React</p>
            <a href="#contact" className='btn btn-primary' >Lets Talk</a>
          </div>

        </div>

      </section>
    </>
  )
}

export default About
