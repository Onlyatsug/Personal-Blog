import '../../index.css'

export default function Figure({ src, alt, caption}) {
  return (
    <figure className="prose text-center">
      <img 
        src={src} 
        alt={alt} 
        style={{marginBottom: 0, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
      />
      {caption && (
        <figcaption className="text-zinc-500 text-base mt-1 mb-5 italic font-charter">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
