import CustomButton from './CustomButton'
import img1 from '../../assets/box1.png'
import img2 from '../../assets/box2.png'
import img3 from '../../assets/box3.png'
import img4 from '../../assets/box4.png'
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useRef } from 'react'

interface SlideItem {
    height: string;
    img: string;
    title: string
}
type SlideArray = SlideItem[];
function Section3() {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    const arr: SlideArray = [
        {

            height: '450px',
            img: img1,
            title: 'Little Krazy'
        },
        {

            height: '330px',
            img: img2,
            title: 'Hawanim Groves City'
        },
        {

            height: '470px',
            img: img3,
            title: 'Picnic Market'
        },
        {

            height: '300px',
            img: img4,
            title: 'Lucawe'
        }
    ]
    return (
        <div className=' w-full h-auto md:px-22 lg:px-42 mt-18 md:mt-26'>
            <div className='px-6 md:px-0'>

                <h1 className='text-4xl md:text-5xl leading-tight'>Book General Access ticket and <br /> enjoy the attraction for free</h1>
                <div className='mt-10'><CustomButton label='Book General Access Ticket' width='320px' icon={true} /></div>
            </div>
            <div className="max-w-[1200px] w-full px-3 md:px-0 my-12 flex items-center justify-center gap-4">

                <button
                    onClick={scrollLeft}
                    className="text-black-700 hover:text-gray-400 transition cursor-pointer"
                >
                    <FaCircleChevronLeft size={35} />
                </button>


                <div
                    ref={sliderRef}
                    className="flex items-center gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
                >
                    {arr.map((x: SlideItem, i: number) => (
                        <div key={i} className="text-center">
                            <div
                                style={{
                                    // width: x.width, 
                                    height: x.height
                                }}
                                className={`min-w-[250px] ${i % 2 === 0 ? "w-[200px] md:w-[300px]" : "w-[250px]"} shrink-0 rounded-3xl overflow-hidden snap-center`}
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
                <button
                    onClick={scrollRight}
                    className="text-black-700 hover:text-gray-400 transition cursor-pointer "
                >
                    <FaCircleChevronRight size={35} />
                </button>
            </div>



        </div>
    )
}

export default Section3