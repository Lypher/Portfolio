import { BsLink } from 'react-icons/bs'
import ProjectLink from '../../../ui-components/ProjectLink'
import { useSelector, useDispatch } from "react-redux"
import { getJobs, getProyects } from "../../../redux/actions"

const Exp = [
  {
    name: 'Sistema Administrativo Random SRL',
    href: 'https://ransys-test.vercel.app/',
    technlogies: "React, Redux, Node.js, SQL, Sequalize, CSS, Axios, Express",
    photo: "https://i.ibb.co/59WgND4/Sistema-Administrativo-Random-SRL.png",
    icon: <BsLink />,
  },
  {
    name: 'Mala en la Cocina',
    href: 'https://malaenlacocina.com',
    photo: "https://media.licdn.com/dms/image/D4E2DAQEIi3Bu4FbUXw/profile-treasury-image-shrink_800_800/0/1683674130546?e=1687381200&v=beta&t=eWhA24vLtKi1Na1oa_G4hIr0G7oHwyUrloysL6EWZD0",
    technlogies: "Wordpress, SQL, HTML, CSS",
    icon: <BsLink />,
  }
]

const Experience = () => {
  const dispatch = useDispatch()
  const experiencia = useSelector((state: any) => state.jobs)
  const proyectos = useSelector((state: any) => state.proyects)

  let Desplegar = () => {
    dispatch(getJobs(!experiencia))
    proyectos === true ? dispatch(getProyects(!proyectos)) : ""
  }

  return (
    <div>
     <button onClick={Desplegar} className='text-xl hover:underline'>{experiencia == false ? "Experiencia" : "Ocultar"}</button>
      {experiencia && (
        <div className="flex flex-col items-center gap-4">
          {Exp.map((project, index) => (
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
        </div>
      )}
    </div>
  )
}

export default Experience
