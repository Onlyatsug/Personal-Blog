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
    <div className='flex flex-col min-h-screen bg-background font-josefin'>
      <Header local={"home"} />
      
      <main className='flex flex-col flex-grow px-8 py-6'>
        <div className='flex sm:flex-row items-start  justify-between gap-4'>
          <h1 className='text-5xl text-my-white font-medium'>Gustavo <br /> Santana</h1>
          <img src={PsxImg} alt="colorful polygon" className='w-24' />
        </div>
        
        <p className='text-my-gray mt-3 mb-4 text-base/6'>
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

      <section className='flex flex-col px-8'>
        <h2 className='text-xl font-medium text-my-white mb-2'>Recente</h2>
        <Card/>
      </section>

      <Footer />
    </div>
  )
}

export default Home
