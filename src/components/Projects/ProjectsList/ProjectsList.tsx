import { BsGithub, BsLink } from 'react-icons/bs'
import ProjectLink from '../../../ui-components/ProjectLink'
import {useSelector, useDispatch} from "react-redux"
import {getJobs, getProyects} from "../../../redux/actions"

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
    name: 'Gaia Nutricion',
    href: 'https://lypher.github.io/E-comerce/home.html',
    photo: "https://media.licdn.com/dms/image/D4D2DAQHLzDW9Ir8jTQ/profile-treasury-image-shrink_800_800/0/1686827117078?e=1687449600&v=beta&t=lBdI2yLKSJeoQRQzhkvCR5vTX4a1djWPv6AlR4cB2Hs",
    technlogies: "Javascript, HTML, CSS, LocalStorage, Boostrap",
    icon:<BsLink/>,
  }
]


const ProjectsList=() => {
  const proyectos = useSelector((state:any)=>state.proyects)
  const experiencia = useSelector((state:any) => state.jobs)
  const dispatch = useDispatch()


let Desplegar = () => {
  dispatch(getProyects(!proyectos))
  experiencia == true? dispatch(getJobs(false)):""

 
}
  return (
    <div >
      <button onClick={Desplegar} className='text-xl hover:underline'>{proyectos == false?"Proyectos":"Ocultar"}</button>
      {proyectos&&<div className="flex flex-col items-center gap-4">
      {Projects.map((project, index) => (
            <div
              key={index}
              className="w-56 transform filter hover:scale-105 hover:border-2 hover:drop-shadow-sm border-white animate-fadeIn"
            >
              <img src={project.photo} alt={project.name} />
              <ProjectLink href={project.href}>
                {project.name} {project.icon}
              </ProjectLink>
              <p className='mb-10'>{project.technlogies}</p>
            </div>
          ))}
    </div>}
    </div>
  )
}

export default ProjectsList