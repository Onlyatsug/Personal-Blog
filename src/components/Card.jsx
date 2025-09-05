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
        <Link to={`/posts/${post.meta.slug}`}  key={index} className='flex flex-col bg-zinc-50 border dark:bg-gray-b rounded-sm px-4 py-4 mb-4'>
          <div className='flex justify-between mb-2 font-black'>
            <h3 className='text-black-text dark:text-white-text text-lg/5'>{post.meta.title}</h3>
          </div>
          <div className='text-gray-text-l dark:text-gray-text line-clamp-2 text-lg/6 font-medium'>
            <p>{post.meta.context}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
