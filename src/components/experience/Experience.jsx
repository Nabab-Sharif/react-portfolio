import './experience.css'
import { BsPatchCheck } from "react-icons/bs";



const Experience = () => {
  return (
    <>
      <section id='experience'>
        <h2>My Skills</h2>

        <div className='container experience_container'>

          {/* Front-End Development Start here  */}
          <div className='experience_frontend'>
            <h3>Frontend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>SCSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>React JS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Redux JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Next JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

            </div>
          </div>

          {/* Back-End Development Start here  */}
          <div className='experience_backend'>
            <h3>Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>Express JS</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheck className='experience_details_icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Experience
