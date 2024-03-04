import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../resources/icons'
import './Header.css'
import { Link } from './Link'

export function Header () {
  return (
    <header className='header'>
      <img src='https://avatars.githubusercontent.com/u/126620447?v=4' alt='Jerson Medina' />
      <h1 className='title'>Hey 🙂, soy Jerson Medina Lezama</h1>
      <p className='description'>
        Desarrollador de software con enfoque en <strong className='red'>backend</strong> y habilidades en <strong className='red'>frontend</strong>. <span className='red-alpha'>De Trujillo, Perú 🇵🇪</span>. Disponible a colaboraciones y apasionado en desarrollar soluciones creativas.
      </p>
      <p className='description contact'>Contáctame y exploremos nuevas oportunidades...</p>

      <nav className='social-media'>
        <Link href='/cv-jmedina.pdf'>
          <FileIcon />
          <span>CV</span>
        </Link>
        <Link href='https://www.linkedin.com/in/jerson-medina-lezama-0a913127a/'>
          <LinkedInIcon />
          <span>LinkedIn</span>
        </Link>
        <Link href='https://github.com/jmedinalezama'>
          <GitHubIcon />
          <span>GitHub</span>
        </Link>
        <Link href='mailto:jersonmedina2000@gmail.com'>
          <MailIcon />
          <span>E-mail</span>
        </Link>
      </nav>
    </header>
  )
}
