import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {GoHome, GoStar, GoShareAndroid} from "react-icons/go";
import {IoBookOutline, IoSettingsOutline,} from "react-icons/io5";
import {LuBookMinus} from "react-icons/lu";
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <div className='menu'>
    <ul className='menu-links mt-4'>
        <li className='nav-links '>
            <Link to="/">
                <GoHome className='icon'/>
                <span className=' active-menu'>Main Page</span>
            </Link>

        </li>
        <li className='nav-links'>
            <Link to="lessons">
                <LuBookMinus className='icon'/>
                <span className='text'>Lesson</span>
            </Link>

        </li>
        <li className='nav-links'>
            <Link to="books">
                <IoBookOutline className='icon'/>
                <span className='text'>Books</span>
            </Link>

        </li>
        <li className='nav-links'>
            <Link to="/">
                <GoStar className='icon'/>
                <span className='text'>Add Premium</span>
            </Link>

        </li>
        <li className='nav-links'>
            <Link to="/">
                <IoSettingsOutline className='icon'/>
                <span className='text'>Settings</span>
            </Link>

        </li>
        <li className='nav-links'>
            <Link to="/">
                <GoShareAndroid className='icon'/>
                <span className='text'>Share</span>
            </Link>

        </li>
    </ul>
</div>  )
}

export default SidebarMenu