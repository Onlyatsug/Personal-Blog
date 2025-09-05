import Header from '../components/Header'
import Footer from '../components/Footer'
import Item from '../components/Item'

import '../index.css'

function Posts() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 font-satoshi text-white-text">
        <div className='fixed top-0 left-0 right-0 m-auto w-full max-w-3xl px-6'>
          <Header local="blog" />
        </div>
        <div className="max-w-3xl flex-grow flex-col m-auto w-full px-6 mt-20">
          <main className="mb-24 mt-16 flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-black text-black-text dark:text-white-text">Posts</h1>
            </div>
          </main>
          <section>
            <Item />
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Posts