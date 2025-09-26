import { Link } from 'react-router-dom'
import '../../index.css'
import { posts } from '../../tools/LoaderPost';

function Card() {
  const recentPosts = posts
    .filter(post => post.meta.published) 
    .slice(0, 3);


  return (
    <>
      {recentPosts.map((post, index) => (
        <Link to={`${"posts/" + post.meta.slug.split("/").pop()}`}  key={index} className='flex flex-col border bg-zinc-900 rounded-sm px-4 py-4 mb-4'>
          <div className='flex justify-between mb-2 font-black'>
            <h3 className='text-lg/5 line-clamp-1 '>{post.meta.title}</h3>
            <p>{post.meta.visual_date}</p>
          </div>
          <div className='text-zinc-600 dark:text-zinc-400 line-clamp-2 text-lg/6'>
            <p>{post.meta.context}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
