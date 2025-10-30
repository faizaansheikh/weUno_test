import React from 'react'
import img1 from '../../assets/b1.png'
import img2 from '../../assets/b2.png'
import img3 from '../../assets/box2.png'
import CustomButton from './CustomButton'

function Section5() {
  const arr = [
    { width: '220px', height: '300px', img: img3, title: 'Restaurants' },
    { width: '330px', height: '450px', img: img1, title: 'Experiences' },
    { width: '220px', height: '300px', img: img2, title: 'Events' },
  ]

  return (
    <div className="w-full h-auto px-4 md:px-32 lg:px-52 mt-12 md:mt-22">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
    
        <div className="flex flex-col md:mb-12">
          <h1 className="text-[45px]  pb-10 leading-tight md:pr-12 mt-8 md:mt-0 text-nowrap ml-2 md:ml-0">
            Create your <br /> experience <br /> as you like
          </h1>
          <CustomButton label="Book Tickets" width='200px' icon={true}/>
        </div>

   
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 snap-x snap-mandatory scroll-smooth">
            {arr.map((x, i) => (
              <div key={i} className="flex flex-col items-center justify-center snap-center shrink-0">
                <div
                  style={{ width: x.width, height: x.height }}
                  className="rounded-3xl overflow-hidden "
                >
                  <img
                    src={x.img}
                    alt={x.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-center text-2xl my-6">{x.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
