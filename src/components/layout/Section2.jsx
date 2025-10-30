import React from 'react'
import img from '../../assets/mall_of.png'
import { FaArrowRight } from "react-icons/fa6";
function Section2() {
    return (
        <div className=' w-full h-full flex flex-col items-center md:px-32 lg:px-62'>
            <h1 className='text-center text-5xl mb-6 mt-12 md:mt-16 leading-tight'>Mall Of: Endless Possibilities</h1>
            <p className='text-center text-md px-8 md:px-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam veniam repellat
                provident adipisci eaque totam doloribus dolorem aliquid incidunt tempora quam corporis
                tempore amet, necessitatibus explicabo, officia natus voluptates vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, modi eius.  </p>


            <div className="w-full mt-12 md:mt-16 mb-8 px-4 md:px-0">
                <img
                    src={img}
                    alt=""
                    className="w-full h-auto max-h-[600px] object-cover rounded-2xl"
                />
            </div>


            <div className=' w-full h-auto px-4 md:px-0 cursor-pointer '>
                <div className='bg-[#2D3813]/90 w-full h-auto py-8 md:py-14 rounded-3xl mt-6 lg:flex  justify-between items-center px-8  hover:bg-[#2D3813]/80 transition-all duration-300'>
                    <div className='flex flex-col gap-6 md:gap-5 '>
                        <p className='text-sm'>25 SR/GUEST</p>
                        <h1 className='text-3xl'>Get your General Access Ticket</h1>
                        <p className='text-sm pr-12 md:pr-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quod odio omnis non nostrum  rerum nihil sint incidunt, ea et, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis minima corrupti impedit, eos ipsum. </p>
                    </div>
                    <div className='flex justify-end items-end mt-3 md:mt-0 '>
                        <FaArrowRight size={40} color='grey' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section2