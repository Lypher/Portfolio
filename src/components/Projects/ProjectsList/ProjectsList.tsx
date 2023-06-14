import { BsGithub, BsLink } from 'react-icons/bs'
import ProjectLink from '../../../ui-components/ProjectLink'

const Projects=[
  {
    name: 'VideoGames APP',
    href: 'https://github.com/Lypher/VideogamesApp',
    technlogies: "React, Redux, Node.js, SQL, Sequalize, CSS, Axios, Express",
    photo:"https://media.licdn.com/dms/image/D4D2DAQF9rV1_Ohv0nw/profile-treasury-image-shrink_800_800/0/1686016000979?e=1687381200&v=beta&t=8TKhwkGJ6xPsIv-I_jkaGK4NN0kWzwxPiw-ZOJmfURo",
    icon:<BsGithub/>,
  },
  {
    name: 'Las casitas del Hornero',
    href: 'https://casitasdelhornero.netlify.app/',
    photo:"https://media.licdn.com/dms/image/D4D2DAQHqxuf8ARH-ag/profile-treasury-image-shrink_800_800/0/1686016992742?e=1687381200&v=beta&t=_X9azgFfLG08fS0h0YM93uy36QIAtsTn10kj07DZUCA",
    technlogies: "React, Redux, Vite, Cloudinary, FireBase,NodeMailer, Express, Axios,PostgreSQL y Sequelize",
    icon:<BsLink/>,
  },

  {
    name: 'Mala en la Cocina',
    href: 'https://malaenlacocina.com',
    photo: "https://media.licdn.com/dms/image/D4E2DAQEIi3Bu4FbUXw/profile-treasury-image-shrink_800_800/0/1683674130546?e=1687381200&v=beta&t=eWhA24vLtKi1Na1oa_G4hIr0G7oHwyUrloysL6EWZD0",
    technlogies: "Wordpress, SQL, HTML, CSS",
    icon:<BsLink/>,
  }
]

const ProjectsList=() => {
  return (
    <div className="flex flex-col items-center gap-4">
      {Projects.map(
        (project) => <>
          <img src={project.photo} alt={project.name} className='w-56 transform filter hover:scale-105 hover:border-2 hover:drop-shadow-sm border-white' />
          <ProjectLink href={project.href} key={project.href}>
            {project.name} {project.icon} 
          </ProjectLink>
          <p className='mb-10'>{project.technlogies}</p>
         
        </>
      )}
    </div>
  )
}

export default ProjectsList