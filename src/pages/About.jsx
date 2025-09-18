import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 font-satoshi text-zinc-950 dark:text-zinc-50">
      <div className='w-3xl m-auto flex flex-col min-h-screen px-4'>
      <Header local={"about"} />
      <main className='flex flex-col flex-grow py-6'>
        <div className='flex items-start  justify-between gap-4'>
          <h1 className='text-5xl font-black'>Quem sou eu?</h1>
        </div>
        <p className='text-zinc-600 dark:text-zinc-400 mt-3 mb-4 text-lg'>
          Em construção...
        </p>
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default About
