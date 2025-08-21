import { Link } from 'react-router-dom'
import '../index.css'
import { posts } from '../posts/loader'

function Item() {
  const recentPosts = posts
    .filter(post => post.meta.published) 

  return (
    <>
      {recentPosts.map((post) => (
        <div key={post.meta.id} className='font-medium flex mb-4 justify-between'>
          <h4 className='text-my-gray text-base font-medium'>{post.meta.visual_date}</h4>
          <Link 
              to={`/blog/post/${post.meta.slug}`} 
              className='text-my-white underline ml-4 mr-4'>
              {post.meta.title}
          </Link>
          <h2 className='text-my-gray text-base font-medium'>#{post.meta.id}</h2>
        </div>
      ))}
    </>
  )
}

export default Item
