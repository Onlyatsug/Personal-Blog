import '../index.css'

function Tags({tags}) {

  return (
    <ul className='flex gap-3 '>
        {tags.map((tag, index) => (
          <li key={index} className='bg-zinc-200 py-1 px-2 rounded-md text-zinc-600'>{tag}</li>
        ))}
    </ul>
  )
}

export default Tags
