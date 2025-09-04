import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { posts } from '../posts/loader'
import '../index.css'
import './post.css'

function Post() {
  const { slug } = useParams() 
  const post = posts.find(p => p.meta.slug === slug) 

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-b">
        <div className="flex-grow flex items-center justify-center text-my-white">
          Post não encontrado.
        </div>
        <Footer />
      </div>
    )
  }

  const PostContent = post.Component
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 text-white-text">
        <div className='fixed top-0 left-0 right-0 m-auto w-full max-w-3xl px-6'>
          <Header />
        </div>
        <div className="flex-grow max-w-3xl m-auto w-full px-6 mt-20">
          <div className="text-black-text dark:text-white-text font-lora">
            <h4 className="text-gray-text-l dark:text-gray-text mb-4">{post.meta.visual_date}</h4>
            <h1 className="text-4xl/10 font-bold mb-8">{post.meta.title}</h1>
            <article className="prose">
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
