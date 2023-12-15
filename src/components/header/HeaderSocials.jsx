import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <>
      <div className="header__socials">
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="http://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="http://dribbble.com" target="_blank" rel="noreferrer"><FaDribbble /></a>
      </div>
    </>
  )
}

export default HeaderSocials
