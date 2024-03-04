import { HTMLIcon, CSSIcon, JavaScriptIcon, GitHubIcon, YoutubeIcon, DeployIcon, ReactIcon, ReactRouterIcon, FirebaseIcon, KotlinIcon, FigmaIcon, JavaIcon, MySqlIcon } from './icons'

export const PROJECTS = [
  {
    title: 'App Farmacovigilancia',
    description: 'App android para gestión de consultas y reportes en una farmacovigilancia. Integración con Firebase y FireStore para autentición de usuarios y persistencia de datos, consumo de servicios REST y construída con arquitectura MVVM.',
    image: '/projects/farmacoapp.webp',
    tags: [
      { icon: FirebaseIcon, name: 'Firebase', color: '#FFCB2C' },
      { icon: KotlinIcon, name: 'Kotlin', color: '#E47959' },
      { icon: FigmaIcon, name: 'Figma', color: '#A259FF' }
    ],
    links: []
  },
  {
    title: 'Sistema de ventas',
    description: 'Sistema de ventas en Java escritorio. Módulo de ventas, productos, clientes, usuarios y reportes en PDF. Implementado usando arquitectura MVC y patrón de diseño DAO.',
    image: '/projects/storeapp.webp',
    tags: [
      { icon: JavaIcon, name: 'Java', color: '#0074BD' },
      { icon: MySqlIcon, name: 'MySQL', color: '#00618B' }
    ],
    links: []
  },
  {
    title: 'Buscador de libros - SearchBookApp',
    description: 'Desarrollo de una SPA (Single Page Application) que consume un servicio API REST. Permite visualizar nuevos libros, consultar por nombres y guardar tus libros favoritos en localStorage.',
    image: '/projects/search-book.webp',
    tags: [
      { icon: HTMLIcon, name: 'HTML', color: '#FC490B' },
      { icon: CSSIcon, name: 'CSS', color: '#2299F8' },
      { icon: JavaScriptIcon, name: 'JavaScript', color: '#F7DF1E' },
      { icon: ReactIcon, name: 'ReactJS', color: '#61DBFB' },
      { icon: ReactRouterIcon, name: 'React Router', color: '#D10014' }
    ],
    links: [
    ]
  },
  {
    title: 'Software academia de fútbol',
    description: 'Software para gestión de academias de fútbol: módulos de sesión, registro, consultas, reportes, etc. Persistencia de datos en archivos planos.',
    image: '/projects/academy-football-app.webp',
    tags: [
      { icon: JavaIcon, name: 'Java', color: '#0074BD' }
    ],
    links: []
  },
  {
    title: 'Generador de gradiente para textos',
    description: 'Proyecto realizado para facilitar la tarea de agregar gradiente a los texto con CSS. Permite ingresar un texto personalizado y aplicar los estilos sobre el mismo. La aplicación permite agregar colores, definir grados y más.',
    image: '/projects/gradient-generator.webp',
    tags: [
      { icon: HTMLIcon, name: 'HTML', color: '#FC490B' },
      { icon: CSSIcon, name: 'CSS', color: '#2299F8' },
      { icon: JavaScriptIcon, name: 'JavaScript', color: '#F7DF1E' }
    ],
    links: [
      /* {
        icon: GitHubIcon,
        link: 'https://jmedinalezama.github.io/portafolio-cv/'
      },
      {
        icon: YoutubeIcon,
        link: 'https://www.youtube.com/'
      },
      {
        icon: DeployIcon,
        link: 'https://jmedinalezama.github.io/portafolio-cv/'
      } */
    ]
  }
]
