import React from 'react'

function Nav() {
  return (
    <div>
        <section className='flex p-2  justify-between w-11/12 mx-auto items-center'>

          <div>
            <h1 className='text-3xl font-bold'>Hockey<span className='text-[#FF4240]'>’</span >s</h1>
          </div>

          <div className='space-x-4 hidden md:flex'>
            <a className='hover:text-[#FF4240] font-semibold' href="#">Home</a>
            <a className='hover:text-[#FF4240] font-semibold' href="#">About</a>
            <a className='hover:text-[#FF4240] font-semibold' href="#">Pages</a>
            <a className='hover:text-[#FF4240] font-semibold' href="#">Blog</a>
            <a className='hover:text-[#FF4240] font-semibold' href="#">Contact</a>
          </div>

          <div className='flex items-center space-x-4  '>
            <div>
            <i class="ri-search-line text-xl hidden md:flex"></i>
            </div>
            <div>
              <button className='btn text-white bg-[#FF4240] hidden sm:flex'>Get Ticket</button>
            </div>
            <div>
            <i class="ri-menu-line text-2xl md:hidden"></i>
            </div>
          </div>
            
        </section>
    </div>
  )
}

export default Nav