import { Badge } from './Badge'
import { Link } from './Link'
import './Project.css'

export function Project ({ project }) {
  const {
    title,
    description,
    image,
    tags,
    links
  } = project

  return (
    <article className='project'>
      <header className='project-info'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <ul className='tags'>
          {
            tags.map(tag => (
              <li key={tag.name} className='item-tag'>
                <Badge>
                  <tag.icon />
                  <span style={{ color: `${tag.color}` }} className='tag-name'>{tag.name}</span>
                </Badge>
              </li>
            ))
          }
        </ul>
      </header>
      <section className='project-img'>
        <img src={image} alt={title} />
      </section>
      <footer className='project-footer'>
        {
          links.map((link, index) => (
            <Badge key={index}>
              <Link href={link.link}>
                <link.icon />
                Ver repositorio
              </Link>
            </Badge>))
        }
      </footer>
    </article>
  )
}
