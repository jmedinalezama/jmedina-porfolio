import { SERVICES } from '../resources/services'
import { TECHNOLOGIES } from '../resources/technologies'
import { Service } from './Service'
import './Skills.css'
import { Technology } from './Technology'

export function Skills () {
  return (
    <section className='section-skills' id='skills'>
      <h2 className='skills-title'>Habilidades</h2>

      <section className='services'>

        <h3 className='service-title'>¿Qué te ofrezco?</h3>

        <div className='service-grid'>
          {
            SERVICES.map((service, index) => (<Service key={index} service={service} />))
          }
        </div>
      </section>

      <section className='technologies'>
        <h3 className='technology-title'>Tecnologías</h3>

        <div className='technology-grid'>
          {
            TECHNOLOGIES.map((tech, index) => (<Technology key={index} technology={tech} />))
          }
        </div>
      </section>

    </section>
  )
}
