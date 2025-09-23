import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

function About() {
  return (
    <div className="min-w-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 font-satoshi text-zinc-950 dark:text-zinc-50">
      <div className='max-w-3xl m-auto flex flex-col min-h-screen px-4'>
      <Header local={"about"} />
      <main className='flex flex-col flex-grow py-6'>
        <div className='flex items-start  justify-between gap-4 mb-6'>
          <h1 className='text-5xl font-black'>Quem sou eu?</h1>
        </div>
        <p className='text-zinc-600 dark:text-zinc-400 mt-3 mb-4 text-lg break'>
          Me chamo Gustavo Santana Barboza, sou um jovem interessado por
          tecnologia de maneira geral, desde engenharia reversa à sistemas modernos.
          Quero compartilhar conhecimento, ideias e guardar informações para que
          quem tenha interesse.
        <br/><br/>
          Faço <strong>Ciência da Computação</strong> na <strong>UFMT</strong> (Universidade 
          Federal do Mato Grosso), desenvolvo em JS com uma stack frontend e no momento gosto
          de estudar aplicações gráficas em baixo nível (C++, OpenGL).
        <br/><br/>
          Tenho 19 anos, gosto de ver videos no youtube, cultura pop no geral, aprender
          assuntos novos, e planejo conhecer o mundo e suas maravílhas naturais e humanas.
        </p>

        <div className='flex items-start  justify-between mt-14 mb-6'>
          <h1 className='text-3xl font-black'>Recomendações</h1>
        </div>
        <div className='text-2xl  justify-center'>
          <h3 className='mb-2'>Leituras</h3>
          <a href="https://www.amazon.com.br/Lord-Mysteries-Vol-Clown-Part/dp/B0DQKLC79Z">
            <img src="https://m.media-amazon.com/images/I/81BKBqWOY6L._SL1500_.jpg" alt="livro" className='h-80' />
          </a>
          <h3 className='mt-8'>Musícas</h3>
          <p>...</p>
          <h3 className='mt-8'>Audiovisual</h3>
          <p>...</p>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default About
