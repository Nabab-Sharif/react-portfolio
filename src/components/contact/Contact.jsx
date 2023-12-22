import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g788msh', 'template_cbzi2wh', form.current, '7BUVKtyeYg1RphLAk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };


  return (
    <>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>

          {/* Start of Contact Part */}
          <div className='contact_options'>

            <article className='contact_option'>
              <MdOutlineMail className='contact_option_icon' />
              <h4>Email</h4>
              <h5>mdnababsharif2@gmail.com</h5>
              <a href="mailto:mdnababsharif2@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
              <RiMessengerLine className='contact_option_icon' />
              <h4>Messager</h4>
              <h5>Md Nabab Shorif</h5>
              <a href="https://m.me/mdnababshorif.mozumder.9" target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
              <FaWhatsapp className='contact_option_icon' />
              <h4>WhatsApp</h4>
              <h5>+8801838047391</h5>
              <a href="https://api.whatsapp.com/send?phone=8801838047391" target="_blank">Send a message</a>
            </article>

          </div>
          {/* End of Contact Part */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary' >Send Message</button>
          </form>

        </div>

      </section>
    </>
  )
}

export default Contact