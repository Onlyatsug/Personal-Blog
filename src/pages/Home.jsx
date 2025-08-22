import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../index.css'

import EmailIcon from '../assets/icons/email.svg'
import GithubIcon from '../assets/icons/github.svg'
import InstagramIcon from '../assets/icons/insta.svg'
import LinkedIcon from '../assets/icons/linked.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'

import PsxImg from '../assets/img/psx.png'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black-b font-satoshi text-white-text">
      <div className='max-w-3xl m-auto flex flex-col min-h-screen px-6'>
      <Header local={"home"} />
      
      <main className='flex flex-col flex-grow py-6'>
        <div className='flex items-start  justify-between gap-4'>
          <h1 className='text-5xl font-black'>Gustavo <br /> Santana</h1>
          <img src={PsxImg} alt="colorful polygon" className='w-24' />
        </div>
        
        <p className='text-gray-text mt-3 mb-4 text-base/6 font-medium'>
          Bem-vindo(a) ao meu blog, aqui <br/>você encontra 
          artigos sobre tecnologia <br/>e notas de estudos.
        </p>
        
        <div className='flex gap-4'>
          <a href="mailto:gsb.jmt@gmail.com" target="_blank" rel="noreferrer">
            <img src={EmailIcon} alt="e-mail" />
          </a>
          <a href="https://instagram.com/onlyatsug" target="_blank" rel="noreferrer">
            <img src={InstagramIcon} alt="instagram" />
          </a>
          <a href="https://github.com/onlyatsug" target="_blank" rel="noreferrer">
            <img src={GithubIcon} alt="github" />
          </a>
          <a href="https://linkedin.com/in/onlyatsug" target="_blank" rel="noreferrer">
            <img src={LinkedIcon} alt="linkedin" />
          </a>
          <a href="https://youtube.com/" target="_blank" rel="noreferrer">
            <img src={YoutubeIcon} alt="youtube" />
          </a>
        </div>
      </main>

      <section className='flex flex-col'>
        <h2 className='text-xl font-black mb-2'>Last Articles</h2>
        <Card/>
      </section>

      <Footer />
      </div>
    </div>
  )
}

export default Home
