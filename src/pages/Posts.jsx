import Header from '../components/Header'
import Footer from '../components/Footer'
import Tags from '../components/Tags'

import { Link, useSearchParams } from 'react-router-dom'
import { posts } from '../posts/loader'

import '../index.css'

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTag = searchParams.get("tag")

  const recentPosts = posts.filter(post => post.meta.published)

  // gera lista de tags únicas
  const uniqueTags = [...new Set(recentPosts.flatMap(post => post.meta.tags))]

  // se tiver tag selecionada, filtra os posts
  const filteredPosts = currentTag 
    ? recentPosts.filter(post => post.meta.tags.includes(currentTag))
    : recentPosts

  return (
    <>
      <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 font-satoshi text-zinc-50">
        <div className='fixed top-0 left-0 right-0 m-auto w-full max-w-3xl px-6 text-zinc-950 dark:text-zinc-50'>
          <Header local="posts" />
        </div>
        <div className="max-w-3xl flex-grow flex-col m-auto w-full px-6 mt-20">
          <main className="mb-24 mt-16 flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl font-black text-zinc-950 dark:text-zinc-50">Posts</h1>
            </div>
            <div className='mt-10 flex flex-wrap gap-4 list-none'>
              {uniqueTags.map((tag, index) => (
                <Link 
                  key={index} 
                  to={`?tag=${tag}`} 
                  className={`py-1 px-2 rounded-md ${
                    tag === currentTag 
                      ? 'bg-zinc-800 text-zinc-50' 
                      : 'bg-zinc-200 text-zinc-600'
                  }`}
                >
                  {tag}
                </Link>
              ))}
              {currentTag && (
                <button 
                  onClick={() => setSearchParams({})} 
                  className='ml-2 text-sm underline text-zinc-950 dark:text-zinc-50'
                >
                  limpar filtro
                </button>
              )}
            </div>
          </main>

          <section>
            {filteredPosts.map((post) => (
              <div key={post.meta.id} className='font-black flex mb-4 text-lg items-center'>
                <h4 className='text-zinc-600 dark:text-zinc-400 text-nowrap'>{post.meta.visual_date}</h4>
                <Link 
                  to={`/posts/${post.meta.slug}`} 
                  className='underline ml-4 text-zinc-950 dark:text-zinc-50'>
                  {post.meta.title}
                </Link>
              </div>
            ))}
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Posts
