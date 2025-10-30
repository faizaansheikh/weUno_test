import React from 'react'
import CustomButton from './CustomButton'
import img1 from '../../assets/box1.png'
import img2 from '../../assets/box2.png'
import img3 from '../../assets/box3.png'
import img4 from '../../assets/box4.png'
function Section3() {
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
        <div className=' w-full h-auto md:px-22 lg:px-42 mt-18 md:mt-26'>
            <div className='px-6 md:px-0'>

                <h1 className='text-4xl md:text-5xl leading-tight'>Book General Access ticket and <br /> enjoy the attraction for free</h1>
                <div className='mt-10'><CustomButton label='Book General Access Ticket' width='320px' icon={true}/></div>
            </div>

            <div className="max-w-[1200px] w-full px-3 md:px-0 my-12 h-auto flex items-center gap-6  overflow-x-auto snap-x snap-mandatory scroll-smooth">
                {arr.map((x, i) => (
                    <div key={i}>
                        <div
                            
                            style={{ width: x.width, height: x.height }}
                            className="min-w-[250px] shrink-0 rounded-3xl overflow-hidden snap-center "
                        >
                            <img src={x.img} alt="" className="w-full h-full" />

                        </div>
                        <h1 className='text-center text-2xl my-6'>{x.title}</h1>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default Section3