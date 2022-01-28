import React from 'react'
import {Link} from 'react-router-dom'
import molto from '../imgs/molto.png'

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'About',
        path: '/about'
    }
]
const Nav =()=>{
    return(
            <div>
                <nav class= ' flex fixed h-65 w-full bg-white justify-between font-secular pt-2 shadow-md overflow-hidden'>

                    <span class='text-2xl font-bold ml-5 text-primary bg-white p-4'>
                    <img class="w-40 bg-white" src={molto} w alt="a man"/>
                    </span>
                    <ul class='flex h-full mr-4 '>
                        {
                            navLinks.map((link,index)=> 
                                (
                                    <li key={index} class=' hover:text-primary p-4 bg-white'>
                                        <Link to={link.path} class='bg-white'>{link.title}</Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>        
    )
}
export default Nav