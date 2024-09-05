import './About.css'
import { Link } from './Link'

export function About () {
  return (
    <section className='section-about' id='about'>
      <h2 className='about-title'>Sobre mí</h2>

      <article>
        <h4>Jerson Medina Lezama</h4>
        <h6>Diseño y Desarrollo de Software ❤️👨‍💻</h6>

        <p>Técnico en <span className='bold'>computación e informática</span>, cuento con una sólida base teórica y práctica en el campo. Soy una persona <span className='bold'>autodidacta</span>, lo cuál me ha permitido mantenerme en constante evolución y mejora en mi área de especialización.</p>

        <p>A lo largo de mi carrera he trabajado en una variedad de proyectos que me han permitido aplicar y mejorar mis habilidades y conocimientos. Me apasiona llevar a cabo el <span className='bold'>diseño</span>, la <span className='bold'>maquetación</span> e <span className='bold'>interacción de interfaces gráficas</span> utilizando tecnologías modernas que se adapten a cada negocio.</p>

        <p>Aunque me gusta más el desarrollo <span className='bold'>Back-end</span> también cuento con experiencia en <span className='bold'>Front-end</span>. Esta combinación de habilidades me permite abordar proyectos de manera integral y ofrecer soluciones completas y efectivas. </p>
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
