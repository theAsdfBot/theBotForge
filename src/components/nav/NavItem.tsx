import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type NavItemProps = {
  displayName: string,
  path: string
}

const NavItem: FunctionComponent<NavItemProps> = ({ displayName, path }) => {
  return (
    <div className='inline-block mx-6'>
      <Link to={path} className='clickable text-white text-xl'>{displayName}</Link>
    </div >
  )
}

export default NavItem