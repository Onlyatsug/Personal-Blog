import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFound from './NotFound'

import { posts } from '../posts/loader'
import '../index.css'
import './post.css'

function Post() {
  const { slug } = useParams() 
  const post = posts.find(p => p.meta.slug === slug) 

  if (!post) {
    return (
      <NotFound/>
    )
  }

  const PostContent = post.Component
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-100 antialiased">
        <div className='fixed top-0 left-0 right-0 m-auto w-full max-w-3xl bg-zinc-100 '>
          <div className='mx-4 text-zinc-950'>
            <Header />
          </div>
        </div>
        <div className="flex-grow max-w-3xl m-auto w-full px-4 mt-6 pt-6 bg-zinc-100">
          <div>
            <h1 className="text-4xl/10 font-bold mb-8 font-neue mt-14">{post.meta.title}</h1>
            <article className="prose ">
              <PostContent />
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Post
