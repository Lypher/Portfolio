import { BsGithub } from "react-icons/bs"
import ProjectLink from "../../ui-components/ProjectLink"
import ProjectsList from "./ProjectsList/ProjectsList"

const Projects=() => {
  return (
    <div>
      <h2 className='text-xl underline'>Proyectos:</h2>
      <ProjectsList />
    </div>
  )
}

export default Projects