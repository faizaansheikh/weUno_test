import React from 'react'
import img1 from '../../assets/b1.png'
import img2 from '../../assets/b2.png'
import img3 from '../../assets/box2.png'
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from './CustomButton'
function Section5() {
    const arr = [

        {
            width: '220px',
            height: '300px',
            img: img3,
            title: 'Restaurants'
        },
        {
            width: '330px',
            height: '450px',
            img: img1,
            title: 'Experiences'
        },
        {
            width: '220px',
            height: '300px',
            img: img2,
            title: 'Events'
        },
        

    ]
    return (
        <div className=' w-full h-auto px-2 md:px-32 ld:px-52 mt-12 md:mt-22'>
            <div className=' px-8 flex items-start bg-red-3d00  flex-wrap md:flex-nowrap gap-10'>
                <div className='pr-10 md:mt-18 mb-4 md:md-0'>
                    <p className='text-5xl pb-9 text-nowrap'>Create your <br /> experience <br /> as you like</p>
                    <span className=' '> <CustomButton label='Book Tickets' /></span>
                </div>

                <div className="bg-emerald-300gh max-w-[1200px] w-full md:px-0 pb-4 h-auto flex justify-center items-center gap-6  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                    {arr.map((x, i) => (
                        <div key={i}>
                            <div

                                style={{ width: x.width, height: x.height }}
                                className="min-w-[200px] shrink-0 rounded-3xl overflow-hidden snap-center "
                            >
                                <img src={x.img} alt="" className="w-full h-full" />

                            </div>
                            <p className='text-center text-2xl my-6'>{x.title}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Section5