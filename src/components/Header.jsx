import { Link } from 'react-router-dom';
import '../index.css'

import SunIcon from '../assets/icons/sun.svg'


function Header({local}) {
  return (
    <>
      <header className='flex pt-6 pl-8 pr-8 pb-8 justify-between'>
        <img src={SunIcon} alt="alter mode" />
        <nav className='flex text-my-white gap-6'>
          <Link to={"/"} className={`${local === "home" ? "underline" : ""} text-base`}>Home</Link>
          <Link to={"/blog"} className={`${local === "blog" ? "underline" : ""} text-base`}>Blog</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
