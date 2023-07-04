import {MenuIcon,XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Link, } from 'react-scroll'


const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }

    const handleClose =()=>{
        setNav(!nav)
    }
  return (
    <div className='w-screen '>
        <div className='w-screen h-[70px] bg-mainColor px-5 flex items-center justify-between ' >
            <div className='w-[95%] mx-auto flex justify-between items-center lg:w-[90%] max-w-[1300px] '>
                <p className='text-white text-3xl font-bold'>Influhub</p>
                <ul className='hidden md:flex gap-5'>
                
                    <li className="text-white text-[20px] "><Link to="home" smooth={true} offset={50} duration={500}>
                    Home
                    </Link></li>
                    <li className="text-white text-[20px] "><Link to="benefits" smooth={true} offset={50} duration={500}>
                    Benefits
                    </Link></li>
                    <li className="text-white text-[20px] "><Link to="form" smooth={true} offset={50} duration={500}>
                    Form
                    </Link></li>
                    
                </ul>
                
                
                <div className='md:hidden' onClick={handleNav}>
                    {!nav?  <MenuIcon className='w-6 text-white' />:<XIcon className='w-6 text-white' />}
                </div>
            

            </div>
        </div>
        <ul className={!nav? 'hidden': 'absolute  w-screen h-[100vh] flex flex-col items-center  bg-white animate-fade-down animate-duration-[200ms] animate-ease-linear'}>
            <li className='border-b-2 w-full text-center py-4 text-mainColor text-[26px]' ><Link onClick={handleClose} to="home" smooth={true} offset={50} duration={500}>
                    Home
                    </Link></li>
            <li className='border-b-2 w-full text-center py-4 text-mainColor text-[26px]'><Link onClick={handleClose} to="benefits" smooth={true} offset={50} duration={500}>
                    Benefits
                    </Link></li>
            <li className='border-b-2 w-full text-center py-4 text-mainColor text-[26px]'><Link onClick={handleClose} to="form" smooth={true} offset={50} duration={500}>
                    Form
                    </Link></li>    
        </ul>   
    </div>
  )
}

export default Nav