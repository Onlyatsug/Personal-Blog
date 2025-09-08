import { Link } from 'react-router-dom';
import '../index.css'



function Header({local}) {
  return (
    <>
      <header className='flex py-5  justify-between font-satoshi '>
        <span></span>{/* <svg className='fill-white-b-l dark:fill-black-b' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-200Zm0 340 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"/></svg> */}
        <nav className='flex text-base gap-6 font-medium'>
          <Link to={"/"} className={`${local === "home" ? "underline" : ""} `}>Home</Link>
          <Link to={"/posts"} className={`${local === "posts" ? "underline" : ""} `}>Posts</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
