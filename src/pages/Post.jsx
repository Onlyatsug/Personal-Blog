import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { posts } from '../posts/loader'
import '../index.css'
import './post.css'

function Post() {
  const { id } = useParams()
  const post = posts.find(p => p.meta.id === id)

  if (!post) {
    return <div className="text-my-white p-8">Post não encontrado.</div>
  }

  const PostContent = post.Component
  return (
    <>
      <div className='max-h-fit bg-background'>
        <div className='min-h-screen max-h-fit m-auto max-w-3xl font-josefin bg-background '>
          <Header/>
          <div className="p-8 text-my-white">
            <h4 className="text-my-gray mb-4">{post.meta.visual_date}</h4>
            <h1 className="text-4xl/10 font-bold mb-8">{post.meta.title}</h1>
            <article className="prose">
              <PostContent />
            </article>
          </div>
          <div className='h-20'></div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Post