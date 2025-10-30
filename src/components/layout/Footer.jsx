import React from 'react'
import img1 from '../../assets/apple.png'
import img2 from '../../assets/google.png'
import card from '../../assets/mastercard.png'
import logo from '../../assets/icons/logo.png'
import mask from '../../assets/mask.png'

import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
function Footer() {
    return (
        <>
            <hr />
            <div className='w-full h-auto bg-amdber-100 px-5 md:px-32 mt-10 md:mt-16'>
                <div className='flex justify-between items-center flex-wrap'>
                     <img src={logo} alt="" className='w-[250px] mb-8 block md:hidden' />
                    <h1 className='text-5xl leading-tight'>Join us for an <br /> unforgettable experience</h1>
                    <div className='mt-10 md:mt-8'>
                        <p className='font-normal tracking-wide text-[14px]'>DOWNLOAD THE GROVES APP</p>
                        <span className='flex items-center gap-4 mt-4'>
                            <img src={img1} alt="" className='w-[150px] h-full cursor-pointer' />
                            <img src={img2} alt="" className='w-[150px] h-12 cursor-pointer' />
                        </span>
                    </div>
                </div>

                <div className='flex items-start mt-12 md:mt-22 gap-8 lg:gap-22 font-normal flex-wrap text-[16px]'>
                    <div className='w-[300px]'>
                        <p className='pb-4'>LOCATION</p>

                        <p>Al-Hizam Park</p>
                        <p>Al Semairi, Yanbu Al Bahr 46455</p>
                        <p>Riyadh Saudi Arabia</p>
                    </div>

                    <div className='w-[300px] '>
                        <p className='pb-4'>WORKING HOURS</p>

                        <p>Sun until Thurs: 4:00PM</p>
                        <p className='pb-4'>Fri & Sat: 2:30PM</p>
                        <p>Gates Close at:</p>
                        <p>Sun until Wed: 12:00PM</p>
                        <p>Thu until Fri: 4:00PM</p>
                    </div>

                    <div className='w-[300px] '>
                        <p className='pb-4'>GUEST SERVICE CALL</p>

                        <p>cc@thegroves-sa.com</p>
                        <p className='pb-4'>920001672</p>
                        <p>+96556631309</p>
                    </div>

                </div>



                <div className='flex justify-between items-center mt-12 md:mt-18 flex-wrap'>
                    <img src={logo} alt="" className='w-[280px] hidden md:block' />
                    <span className='flex items-center gap-8 text-[lightgrey] '>
                        <FaTiktok size={30} />
                        <AiFillInstagram size={30} />
                        <FaXTwitter size={30} />
                        <FaSnapchatGhost size={30} />
                    </span>

                </div>


                <div className='flex justify-between items-center mt-8 font-normal pb-4 flex-wrap'>
                   <span className='flex gap-4 md:gap-6 lg:gap-16 text-sm flex-wrap'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>@2025 The Groves for Entertainment</p>
                   </span>
                    <span className='flex items-center gap-2 text-[lightgrey] md:mt-0 mt-4'>
                        <RiVisaLine size={30} />
                         <img src={card} alt="" className='w-[30px]' />
                         <img src={mask} alt="" className='w-[25px]' />
                    
                    </span>

                </div>
            </div>
        </>
    )
}

export default Footer