import Header from '../components/Header'
import Footer from '../components/Footer'
import Item from '../components/Item'

import '../index.css'

function Blog() {
  return (
    <>
      <div className='h-screen bg-background font-josefin'>
      <div className='max-h-fit max-w-3xl flex-grow'>
        <Header local="blog" />
        <main className='pl-8 pr-8 mb-24 mt-16 flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1 className='text-5xl text-my-white font-medium'>Blog</h1>
          </div>
        </main>
        <section className='pl-8 pr-8'>
          <Item />
        </section>    
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Blog
