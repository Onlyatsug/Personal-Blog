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
    <>
    <div className='h-screen bg-background flex flex-col'>
      <div className='max-h-fit m-auto max-w-3xl font-josefin flex-grow'>
        <Header local={"home"}></Header>
        <main className='pl-8 pr-8 mb-8 flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-5xl text-my-white font-medium'>Gustavo <br /> Santana</h1>
            <img src={PsxImg} alt="colorful poligon" className='w-24' />
          </div>
          <p className='text-my-gray mt-3 mb-4 text-base/6'>Bem-vindo(a) ao meu blog, aqui você encontra<br /> artigos sobre tecnologia e notas de estudos.</p>
          <div className='flex gap-4'>
            <a href="mailto:gsb.jmt@gmail.com" target="_blank">
              <img src={EmailIcon} alt="e-mail" />
            </a>
            <a href="https://instagram.com/onlyatsug" target="_blank">
              <img src={InstagramIcon} alt="instagram" />
            </a>
            <a href="https://github.com/onlyatsug" target="_blank">
              <img src={GithubIcon} alt="github" />
            </a>
            <a href="https://linkedin.com/in/onlyatsug" target="_blank">
              <img src={LinkedIcon} alt="linkedin" />
            </a>
            <a href="https://youtube.com/" target="_blank">
              <img src={YoutubeIcon} alt="youtube" />
            </a>
          </div>
        </main>
        <section className='flex flex-col pl-8 pr-8'>
          <h2 className='text-xl font-medium text-my-white mb-2'>Recente</h2>
          <Card/>
        </section>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
