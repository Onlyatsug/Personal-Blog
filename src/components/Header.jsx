import { Link } from 'react-router-dom';
import '../index.css'

import SunIcon from '../assets/icons/sun.svg'


function Header({local}) {
  return (
    <>
      <header className='flex pt-6 pb-8 justify-between font-satoshi'>
        <img src={SunIcon} alt="alter mode" />
        <nav className='flex text-my-white gap-6 font-medium'>
          <Link to={"/"} className={`${local === "home" ? "underline" : ""} `}>Home</Link>
          <Link to={"/blog"} className={`${local === "blog" ? "underline" : ""} `}>Blog</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
