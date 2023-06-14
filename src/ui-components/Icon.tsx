interface IProps {
  children: React.ReactNode
  href: string
}
const Icon=({ children, href }: IProps) => {
  return (
    <a href={href}
      target='_blank'
      className='hover:text-blue-500'
    >
      {children}
    </a>
  )
}

export default Icon