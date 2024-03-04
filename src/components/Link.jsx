import './Link.css'

export function Link ({ children, href }) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className='link'>
      {children}
    </a>
  )
}
