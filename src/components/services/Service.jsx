import './service.css'
import { BsCheck2Circle } from "react-icons/bs";


const Service = () => {
  return (
    <>
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services_container'>
          {/*.........Start Of UI/UX..........*/}
          <article className='service'>
            <div className='service_head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/*.........End Of UI/UX..........*/}


          {/*.........Start Of Web Development..........*/}
          <article className='service'>
            <div className='service_head'>
              <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/*.........End Of Web Development..........*/}


          {/*.........Start Of Content Creation..........*/}
          <article className='service'>
            <div className='service_head'>
              <h3>Content Creation</h3>
            </div>

            <ul className='service_list'>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>

              <li>
                <BsCheck2Circle className="service_list_icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </article>
          {/*.........End Of Content Creation..........*/}

        </div>

      </section>
    </>
  )
}

export default Service
