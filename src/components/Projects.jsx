import { PROJECTS } from '../resources/projects'
import { Project } from './Project'
import './Projects.css'

export function Projects () {
  return (
    <section className='projects-container' id='projects'>
      <h2 className='projects-title'>Proyectos</h2>

      <div>
        {
          PROJECTS.map(project => (<Project key={project.title} project={project} />))
        }
      </div>
    </section>
  )
}
