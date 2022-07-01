import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import image from '../assets/images/things-todo-logo.svg'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='bg-sky-500 text-white'>
            <div className="container mx-auto flex justify-between px-8 py-2 flex items-center ">
                {/* <NavLink to='/' className="cursor-pointer text-xl font-bold ">Things ToDo</NavLink> */}
                <NavLink to='/' className="cursor-pointer text-xl font-bold nav-image"> <img src={image} width="120px" alt="" /> </NavLink>

                <div className="ml-auto md:hidden">
                    <AiOutlineMenu className="text-3xl cursor-pointer" onClick={() => setOpen(!open)} />
                </div>
                <div
                    className={`md:ml-auto flex flex-col w-full gap-1 absolute md:static md:flex-row md:w-auto top-20 left-0 px-4 bg-black  md:bg-transparent z-50 py-5 lg:py-0 ${open ? "" : "hidden md:flex"
                        }`}
                >
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/addtask">Add Task</NavLink>
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/completed">Completed Task</NavLink>
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/todos">To-Do</NavLink>
                    <NavLink className='px-5 hover:underline hover:text-red-600 text-lg ' to="/calendar">Calendar</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar