import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Big = ({heading, message}) => {
    return (
        <div  className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-2 style={{opacity: 0.5}}' />
            <div className='p-5 text-white z-10 ml-10rem mt-10rem'>
            <p className='py-5 text-xl'>{message}</p>

            <div className='flex justify-center mt-16'>
      <button className='mx-2'>
        <img src='/images/ScreenPrint.jpg' alt='screen printing' className='w-32 h-32' />
        <Link href='/screenprinting'>Screen Printing</Link>
      </button>
      <button className='mx-2'>
        <img src='/images/embroid.jpg' alt='embroidery' className='w-32 h-32' />
        <Link href='/embroidery'>Embroidery</Link>
      </button>
      <button className='mx-2'>
        <img src='/images/Rhinestone.jpg' alt='rhinestone' className='w-32 h-32' />
        <Link href='/rhinestone'>Rhinestone</Link>
      </button>
    </div>
  </div>
</div>
)
}
export default Big
