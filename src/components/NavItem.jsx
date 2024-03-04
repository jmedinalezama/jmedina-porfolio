import './NavItem.css'

export function NavItem ({ children, href, onClick }) {
  return (
    <a href={href} className='nav-item' onClick={onClick}>
      {children}
    </a>
  )
}
