import { Link } from 'react-router-dom'
import '../index.css'
import { posts } from '../posts/loader'

function Item() {
  const recentPosts = posts
    .filter(post => post.meta.published)  
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))

  return (
    <>
      {recentPosts.map((post) => (
        <div key={post.meta.id} className='font-medium flex mb-4 justify-between'>
          <div className='flex gap-6'>
            <h4 className='text-my-gray text-base font-medium'>{post.meta.visual_date}</h4>
            <Link 
              to={`/blog/post/${post.meta.id}`} 
              className='text-my-white underline'
            >
              {post.meta.title}
            </Link>
          </div>
          <h2 className='text-my-gray text-base font-medium'>#{post.meta.id}</h2>
        </div>
      ))}
    </>
  )
}

export default Item
