interface IProps {
  href: string
  children: React.ReactNode
}
const ProjectLink=({ href, children }: IProps) => {
  return (
    <a href={href}
      target='_blank'
      className='flex gap-2 items-center text-lg hover:underline'
    >
      {children}
    </a>
  )
}

export default ProjectLink