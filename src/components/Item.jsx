import { Link } from 'react-router-dom'
import '../index.css'
import { posts } from '../posts/loader'

function Item() {
  const recentPosts = posts
    .filter(post => post.meta.published) 

  return (
    <>
      {recentPosts.map((post) => (
        <div key={post.meta.id} className='font-medium flex mb-4 '>
          <h4 className='text-gray-text'>{post.meta.visual_date}</h4>
          <Link 
              to={`/blog/post/${post.meta.slug}`} 
              className='underline ml-4'>
              {post.meta.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Item
