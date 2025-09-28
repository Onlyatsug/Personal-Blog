import { useParams } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import NotFound from '../pages/NotFound'

import { posts } from '../tools/LoaderPost'
import '../index.css'
import '../posts/post.css'
import './Posts'

function Post() {
  const { slug } = useParams() 

  const post = posts.find(p => p.meta.slug.split("/").pop() === slug) 

  if (!post) {
    console.log("sem post");
    return (
      <NotFound/>
    )
  }

  const PostContent = post.Component
  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-950 antialiased text-zinc-50">
        <div className='fixed top-0 left-0 right-0 m-auto w-full max-w-3xl  '>
          <div className='mx-4'>
            <Header />
          </div>
        </div>
        <div className="flex-grow max-w-3xl m-auto w-full px-4 mt-6 pt-6">
          <div>
            <h1 className="text-4xl/10 font-bold mb-6 font-neue mt-14">{post.meta.title}</h1>
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
