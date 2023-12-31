import './header.css'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Me from '../../../src/assets/images/me.png'


const Header = () => {
  return (
    <>
      <header>
        <div className='container header__container'>
          <div>
            <h5>Hello I am</h5>
            <h1>Nabab Sharif</h1>
            <h5>Front-End Developer</h5>
            <CTA />
            <HeaderSocials />
          </div>

          <div className="me">
            <img src={Me} alt="me.png" />
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
