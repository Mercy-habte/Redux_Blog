import React from 'react'
import {Link} from 'react-router-dom'
import molto from '../imgs/molto.png'
import About from './about'

const Nav =()=>{
    return(
           <nav class= "flex fixed w-full justify-between pt-5 pl-3 pb-5 shadow-md bg-white">
               <span>
                   <Link to='/'>
                   <img src={molto} class='w-full h-8'></img>
                   </Link>
               </span>
               <ul class='flex justify-evenly   font-Asap text-gray-600'>
                   <Link to="/" class="">
                   <li class='hover:text-primary'>Home</li>
                   </Link>
                   <Link to='' className="">
                   <li class='pl-6 hover:text-primary'>About</li>
                   </Link>
                   <Link to="/categories" className="">
                   <li class='pl-6 hover:text-primary'>Blog</li>
                   </Link>
                   <Link to="/" className="">
                   <li class='pl-6 hover:text-primary'>Contact</li>
                   </Link>
                   <Link to="/login " className="">
                   <li class='ml-5 mr-2 pl-3 pt-1 pb-1 pr-3 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transition ease-out'>Login</li>
                   </Link>
                   <Link to="/register" className="">
                   <li class='ml-2 mr-2 pl-3 pt-1 pb-1 pr-3 text-primary border-solid border-2 border-primary rounded-md hover:bg-primary hover:text-white transiton ease-out'>Register</li>
                   </Link>

                  
               </ul>

           </nav>    
    )
}
export default Nav