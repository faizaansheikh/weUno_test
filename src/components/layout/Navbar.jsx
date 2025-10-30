import React, { useState } from 'react'
import logo from '../../assets/icons/logo.png'
import flag from '../../assets/icons/flag.png'
import CustomButton from './CustomButton'

import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
function Navbar() {
    const [open, setOpen] = useState(false)
    const menu = [
        'DINE IN WITH US',
        'PLAN YOUR VISIT',
        'EVENTS',
        'VIEW GROVES MAP',
        'OUR STORY',
        'CONTACT US',
    ]
    return (
        <>

            <div className=' w-full h-auto px-0 hidden md:block'>
                <div className='w-full h-[90px]  flex justify-between items-center px-22'>
                    <div className='w-[280px] h-[70px] '>
                        <img src={logo} alt="Logo" className="w-full h-full py-2 " />
                    </div>
                    <div className='flex items-center gap-4'>
                        <span className=' md:hidden lg:flex items-center gap-4 text-[lightgrey] ml-3'>
                            <FaTiktok size={22} />
                            <AiFillInstagram size={22} />
                            <FaXTwitter size={22} />
                            <FaSnapchatGhost size={22} />
                        </span>

                        <CustomButton label='Log in' />
                        <span><FaChevronDown /></span>
                        <span>
                            <img src={flag} alt="flag" className='w-[30px] h-[full]' />
                        </span>
                        <span>
                            <p>English</p>
                        </span>
                    </div>
                </div>

                <div className='w-full h-[50px] border-t border-b flex justify-between items-center border-[grey] px-22 mt-2 text-[lightgrey]'>

                    {
                        menu.map((x, i) => (
                            <li key={i} className='list-none md:text-[12px] lg:text-[15px]'>{x}</li>
                        ))
                    }

                </div>


            </div>


            <div className='w-full h-[100px] flex md:hidden justify-between items-center px-8'>
                <span> <img src={logo} alt="Logo" className="w-[220px] h-[68px]  py-2 " /></span>
                <span className='cursor-pointer' >
                    {open ? <RxCross1 size={30} className='text-(--color-secondary)' onClick={() => setOpen(false)} /> : <GiHamburgerMenu size={30} className='text-(--color-secondary)' onClick={() => setOpen(true)} />}


                </span>
            </div>

            <div
                className={`fixed left-0 w-full h-screen z-50 bg-linear-to-l from-[#111700] via-[#1B2503] to-[#243005] overflow-hidden transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'
                    } px-8`}
            >

                <div className='w-full h-[100px] flex md:hidden justify-between items-center px-0'>
                    <span> <img src={logo} alt="Logo" className="w-[220px] h-[68px]  py-2 " /></span>
                    <span className='cursor-pointer' >
                        {open ? <RxCross1 size={30} className='text-(--color-secondary)' onClick={() => setOpen(false)} /> : <GiHamburgerMenu size={30} className='text-(--color-secondary)' onClick={() => setOpen(true)} />}


                    </span>
                </div>

                {
                    open && <div>

                        <div>
                            {
                                menu.map((x, i) => (
                                    <li key={i} className={`w-full flex justify-start list-none py-5 border-b border-[lightgrey] ${i === 0 ? 'mt-2' : ''}`}>{x}</li>
                                ))
                            }
                        </div>


                        <span className='flex items-center gap-3 my-8'>
                            <span><FaChevronDown /></span>
                            <span>
                                <img src={flag} alt="flag" className='w-[30px] h-[full]' />
                            </span>
                            <span>
                                <p>English</p>
                            </span>
                        </span>
                        <span className='flex items-center'>
                            <CustomButton label='Log in' />
                        </span>

                    </div>
                }
            </div>



        </>
    )
}

export default Navbar