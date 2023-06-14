import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Icon from '../../ui-components/Icon'

const SocialMedia=() => {
  return (
    <div className='flex justify-center gap-4'>
      <Icon href='https://github.com/Lypher'>
        <BsGithub className='text-4xl' />
      </Icon>
      <Icon href='https://www.linkedin.com/in/enzomarianoacosta/'>
        <BsLinkedin className='text-4xl' />
      </Icon>
    </div>
  )
}

export default SocialMedia