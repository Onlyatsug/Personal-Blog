import '../index.css'

function Tags({tags}) {

  if(!tags){
    return 'no tags'
  }

  return (
    <ul className='flex gap-3 p-0 mb-6'>
        {tags.map((tag, index) => (
          <li key={index} className='bg-zinc-200 py-1 px-2 rounded-md text-zinc-600'>{tag}</li>
        ))}
    </ul>
  )
}

export default Tags
