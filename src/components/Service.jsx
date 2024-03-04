import './Service.css'

export function Service ({ service }) {
  const { image, title, description } = service
  return (
    <article className='service-item'>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  )
}
