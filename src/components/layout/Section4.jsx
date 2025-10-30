import React from 'react'
import img1 from '../../assets/c1.png'
import img2 from '../../assets/c2.png'
import img3 from '../../assets/c3.png'
import img4 from '../../assets/c4.png'
import { FaArrowRight } from "react-icons/fa6";
function Section4() {
    const arr = [
        {
            img: img1,
            title: 'Vida Vera'
        },
        {
            img: img2,
            title: 'Zama Zulu'
        },
        {
            img: img3,
            title: 'Khawaja Yanni'
        },
        {
            img: img4,
            title: 'Yamagata'
        }
    ]
    return (
        <div className=' w-full h-auto px-4 md:px-32 ld:px-52 mt-16 md:mt-26'>
            <div className='flex flex-col md:text-center items-center justify-center gap-6'>
                <h1 className='text-5xl ml-2 md:ml-0'>Experience the Finest Cuisine</h1>
                <p className='md:px-0 lg:px-28 hidden md:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate consectetur neque repellendus
                    et corporis repellat hic consequatur quidem minima, nobis quibusdam totam sequi deleniti, dolores ex tenetur blanditiis iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, cupiditate provident amet officiis vero placeat enim consequuntur</p>
            </div>

            <div className="flex items-center gap-6 justify-center flex-wrap mt-12 md:mt-16">
                {
                    arr.map((x, i) => (
                        <div key={i} className="bg-[#2B3612] w-[500px] h-[418px] rounded-4xl cursor-pointer transition-colors duration-300 hover:bg-[#2d3912]">
                            <img src={x.img} alt="" className='w-full object-cover p-3' />
                            <div className='flex items-center justify-between px-6 '>
                                <span>
                                    <h1 className='text-[22px] pb-3'>{x.title}</h1>
                                    <span className='bg-[#AD8749] px-5 py-1 rounded-3xl text-[13px] tracking-widest'>100 SR PER GUEST</span>
                                </span>
                                <span> <FaArrowRight size={38} color='grey' /></span>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Section4