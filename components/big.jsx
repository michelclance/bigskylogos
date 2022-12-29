import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

    const Big = ({heading, message}) => {
        return (
          <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
              <div className='relative'>
                
                <h1 className='text-white text-4xl absolute justify-center'>Services</h1>
                   
                

              <div className='flex justify-center mt-16'>
                <div className='mx-2'>
                <h2 className='text-xl text-white'>Screen Printing</h2>
                    <div className='max-h-32 max-w-md'>
                        <p className='text-l text-white'>Big Sky Logos specializes in custom screen printing for businesses, clubs, schools, teams, and special events (family reunions, bachelorette parties, and more). You can design your own t-shirt and bring us the artwork or we can help you create a unique t-shirt design. Here are a few samples of our custom t-shirts, personalized jerseys, and class shirts.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  <img src='/images/ScreenPrint.jpg' alt='screen printing' className='w-32 h-32' />
                  <Link href='/screenprinting'>
                    <button className='border-4 border-blue-500 border-solid text-white'>Screen Printing</button>
                  </Link>
                </div>

                <div className='mx-2'>
                    <h2 className='text-xl text-white'>Embroidery</h2>
                        <div className='max-h-32 max-w-md'>
                            <p className='text-l text-white'>We offer custom embroidery for hats, bags, polos, pants, team apparel, etc. with up to 15 colors per design. All work done is done house using top of the line "Tajima" Embroidery Machine. Check out our custom embroidered hats, personalized bags, embroidered polos, and more.</p>
                        </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  <img src='/images/embroid.jpg' alt='embroidery' className='w-32 h-32' />
                  <Link href='/embroidery'>
                    <button className='border-4 border-blue-500 border-solid text-white'>Embroidery</button>
                  </Link>
                </div>

                <div className='mx-2'>
                    <h2 className='text-xl text-white'>Rhinestone</h2>
                        <div className='max-h-32 max-w-md'>
                        <p className='text-l text-white'>We offer custom embroidery for hats, bags, polos, pants, team apparel, etc. with up to 15 colors per design. All work done is done house using top of the line "Tajima" Embroidery Machine. Check out our custom embroidered hats, personalized bags, embroidered polos, and more.</p>
                        </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  <img src='/images/Rhinestone.jpg' alt='rhinestone' className='w-32 h-32' />
                  <Link href='/rhinestone'>
                    <button className='border-4 border-blue-500 border-solid text-white'>Rhinestone</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
  }
  
export default Big
