import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
 

const Hbutton = () => {

    return (
<div className='flex justify-center mt-16'>
      <button className='mx-2'>
        <img src='/images/ScreenPrint.jpg' alt='screen printing' className='w-32 h-32' />
      </button>
      <Link href='/screenprinting'>Screen Printing</Link>
      <button className='mx-2'>
        <img src='/images/embroid.jpg' alt='embroidery' className='w-32 h-32' />
      </button>
      <Link href='/embroidery'>Embroidery</Link>
      <button className='mx-2'>
        <img src='/images/Rhinestone.jpg' alt='rhinestone' className='w-32 h-32' />
      </button>
      <Link href='/rhinestone'>Rhinestone</Link>
    </div>
    )}
    
export default Hbutton
