import '../../index.css'

function Tags({tags}) {

  if(!tags){
    return 'no tags'
  } else {
    tags.sort();
  }

  return (
    <ul className='flex gap-3 p-0 mb-6'>
        {tags.map((tag, index) => (
          <li key={index} className='bg-zinc-900 rounded-sm px-2 py-1 list-none font-satoshi'>{tag}</li>
        ))}
    </ul>
  )
}

export default Tags
