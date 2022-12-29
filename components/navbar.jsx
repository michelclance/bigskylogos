import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div style={{backgroundColor : `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <Link href='/'>
                    <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Big Sky Logos</h1>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                            <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                            <Link href='/aboutus'>About Us</Link>
                    </li>
                    <li className='p-4'>
                            <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

            </div>
        
        </div>
    )
}
export default Navbar