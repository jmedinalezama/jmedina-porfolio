import './About.css'
import { Link } from './Link'

export function About () {
  return (
    <section className='section-about' id='about'>
      <h2 className='about-title'>Sobre mí</h2>

      <article>
        <h4>Jerson Medina Lezama</h4>
        <h6>Estudiante de informática 👨‍💻</h6>

        <p>Actualmente me encuentro cursando la carrera de <span className='bold'>computación e informática</span>. Soy una persona <span className='bold'>autodidacta</span>, lo cuál me ha permitido seguir siempre mejorando.</p>

        <p>A lo largo de la carrera he realizado diferentes proyectos dónde apliqué las habilidades y conocimientos adquiridos. Disfruto llevar a cabo el <span className='bold'>diseño</span>, la <span className='bold'>maquetación</span> e <span className='bold'>interacción de interfaces gráficas</span> utilizando las tecnologías modernas.</p>

        <p>Me gusta el <span className='bold'>Back-end</span> pero también hago <span className='bold'>Front-end</span>. </p>
      </article>

      <div className='cv'>
        <Link href='/carta-presentacion.pdf'>
          <span>Carta de presentación</span>
        </Link>
        <Link href='/cv-jmedina.pdf'>
          <span>CV</span>
        </Link>
      </div>
    </section>
  )
}
