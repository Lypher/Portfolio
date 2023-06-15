import { BsLink } from 'react-icons/bs'
import ProjectLink from '../../../ui-components/ProjectLink'
import { useSelector, useDispatch } from "react-redux"
import { getJobs, getProyects } from "../../../redux/actions"

const CV = [
  {
    name: 'Enzo Mariano',
  

  }
]

const Curriculum = () => {
const Desplegar = () =>{
   alert("en proceso")
}

  return (
    <button className='text-xl hover:underline' onClick={Desplegar}>CV</button>
  )
}

export default Curriculum
