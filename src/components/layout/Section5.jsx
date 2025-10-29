import React from 'react'
import img1 from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.png'
import img4 from '../../assets/c4.png'
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from './CustomButton'
function Section5() {
    const arr = [
        {
            width: '330px',
            height: '450px',
            img: img1,
            title: 'Little Krazy'
        },
        {
            width: '220px',
            height: '300px',
            img: img2,
            title: 'Hawanim Groves City'
        },
        {
            width: '330px',
            height: '450px',
            img: img3,
            title: 'Picnic Market'
        },
        {
            width: '220px',
            height: '300px',
            img: img4,
            title: 'Lucawe'
        }
    ]
    return (
        <div className=' w-full h-auto px-4 md:px-32 ld:px-52 mt-12 md:mt-32'>
            <div className=' px-8 flex items-start  flex-wrap md:flex-nowrap gap-10'>
                <div className='pr-10'>
                    <p className='text-5xl pb-9 text-nowrap'>Create your <br /> experience <br /> as you like</p>
                    <span className=' '> <CustomButton label='Book Tickets' /></span>
                </div>

                <div className="max-w-[1200px] w-full md:px-0 pb-4 h-auto flex items-center gap-6  overflow-x-auto snap-x snap-mandatory scroll-smooth">
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