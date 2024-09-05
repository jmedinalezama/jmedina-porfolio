import { NavItem } from './NavItem'
import { HomeIcon, ProjectsIcon, SkillsIcon, UserIcon, MailIcon, MenuOpenIcon, MenuCloseIcon, LogoIcon } from '../resources/icons'
import './NavBar.css'
import { useRef, useState } from 'react'

export function NavBar () {
  const [isOpen, setIsOpen] = useState(false)
  const navMenu = useRef()

  const handleClick = () => {
    navMenu.current.classList.toggle('is-open')
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className='open-close-menu' onClick={handleClick}>
        {
          isOpen ? <MenuCloseIcon /> : <MenuOpenIcon />
        }
      </button>

      <div className='navbar-container'>
        <div className='logo'>
          <a href='#'><LogoIcon /></a>
        </div>

        <nav className='navbar' ref={navMenu}>
          <NavItem href='#' onClick={handleClick}>
            <span>Inicio</span>
            <HomeIcon />
          </NavItem>
          <NavItem href='#projects' onClick={handleClick}>
            <span>Proyectos</span>
            <ProjectsIcon />
          </NavItem>
          <NavItem href='#skills' onClick={handleClick}>
            <span>Habilidades</span>
            <SkillsIcon />
          </NavItem>
          <NavItem href='#about' onClick={handleClick}>
            <span>Sobre mí</span>
            <UserIcon />
          </NavItem>
          <NavItem href='#contact' onClick={handleClick}>
            <span>Contacto</span>
            <MailIcon />
          </NavItem>
        </nav>
      </div>
    </>
  )
}
