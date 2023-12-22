import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/md-nabab-sharif-ab82841a3/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Nabab-Sharif" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </>
  )
}

export default HeaderSocials
