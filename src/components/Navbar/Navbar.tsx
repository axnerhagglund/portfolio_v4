import React from 'react'
import { RiAccountCircle2Fill } from "react-icons/ri";
import { RiBnbFill } from "react-icons/ri";
import { RiCornerRightUpFill } from "react-icons/ri";
import NavLink from '../NavLink/NavLink';




function Navbar() {

   
  return (
    <section className="sticky px-[10px] pt-[20px] flex justify-between text-[#94DBB2] bg-[#112D29] ">
        <NavLink path="/" >
            Who am i?
            <RiAccountCircle2Fill />
        </NavLink>
        <NavLink path="/" >
            See my projects
            <RiBnbFill />
        </NavLink>
        <NavLink path="/" >
            Say hello!
            <RiCornerRightUpFill />
        </NavLink>
    </section>
  )
}

export default Navbar 