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

                {/* mobile button */}
                <div className='block sm:hidden z-10'>
               {nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}} /> : <AiOutlineMenu size={20} style={{color:`${textColor}`}} />}
                </div>
                {/* mobile menu */}
                <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-100 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/aboutus'>About Us</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        
        </div>
    )
}
export default Navbar