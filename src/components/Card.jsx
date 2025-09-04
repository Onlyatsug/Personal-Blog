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
        <Link to={`/blog/post/${post.meta.slug}`}  key={index} className='flex flex-col bg-zinc-50 border dark:bg-gray-b rounded-sm px-4 py-4 mb-4'>
          <div className='flex justify-between mb-2 font-black'>
            <h3 className='text-black-text dark:text-white-text text-lg'>{post.meta.title}</h3>
            <span className='text-gray-text-l dark:text-gray-text font-medium'>{post.meta.visual_date}</span>
          </div>
          <div className='text-gray-text-l dark:text-gray-text line-clamp-2 font-medium'>
            <p>{post.meta.context}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
