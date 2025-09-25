import { Link } from 'react-router-dom';
import '../../index.css'



function Header({local}) {
  return (
    <>
      <header className='flex py-5  justify-between font-satoshi '>
        <p> </p>
        <nav className='flex text-base gap-6 font-medium'>
          <Link to={"/"} className={`${local === "home" ? "underline" : ""} `}>Home</Link>
          <Link to={"/posts"} className={`${local === "posts" ? "underline" : ""} `}>Posts</Link>
          {//<Link to={"/about"} className={`${local === "about" ? "underline" : ""} `}>About</Link>
          }
        </nav>
      </header>
    </>
  )
}

export default Header
