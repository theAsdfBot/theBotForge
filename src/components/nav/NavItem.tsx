import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type NavItemProps = {
  displayName: string,
  path: string
}

const NavItem: FunctionComponent<NavItemProps> = ({ displayName, path }) => {
  return (
    <Link to={path} className='clickable'>{displayName}</Link>
  )
}

export default NavItem