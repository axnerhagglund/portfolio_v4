import React from 'react'
import {Link} from "react-router-dom"

type NavLinkProps = {
    path: string,
    children: React.ReactNode
}

function NavLink({path, children}:NavLinkProps) {

  return (
    <Link to={path}>
    {children}
    </Link>
  )
}

export default NavLink