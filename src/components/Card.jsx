import { Link } from 'react-router-dom'
import '../index.css'
import { posts } from '../posts/loader';

function Card() {
  const recentPosts = posts
    .filter(post => post.meta.published) 
    .slice(0, 3);


  return (
    <>
      {recentPosts.map((post, index) => (
        <Link to={`/blog/post/${post.meta.slug}`}  key={index} className='flex flex-col bg-background-upper rounded-md p-3 pt-2 mb-4'>
          <div className='flex justify-between mb-2 text-base'>
            <h3 className='text-my-white font-medium text-base'>{post.meta.title}</h3>
            <span className='text-my-gray'>{post.meta.visual_date}</span>
          </div>
          <div className='text-my-gray line-clamp-2'>
            <p>{post.meta.context}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
