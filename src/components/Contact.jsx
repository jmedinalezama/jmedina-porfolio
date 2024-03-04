import { GitHubIcon, InstagramIcon, MailIcon, XIcon } from '../resources/icons'
import './Contact.css'
import { Link } from './Link'

export function Contact () {
  return (
    <section className='section-contact' id='contact'>
      <h2>Contacto</h2>

      <div>
        {/* <Link href='#'>
          <XIcon />
        </Link> */}
        <Link href='https://github.com/jmedinalezama'>
          <GitHubIcon />
        </Link>
        {/* <Link href='#'>
          <InstagramIcon />
        </Link> */}
        <Link href='mailto:jersonmedina2000@gmail.com'>
          <MailIcon />
        </Link>
      </div>
    </section>
  )
}
