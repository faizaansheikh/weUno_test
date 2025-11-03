import { useState } from 'react';
import hero from '../../assets/hero.png'
import CustomButton from './CustomButton';
import Navbar from './Navbar';
import { GoDotFill } from "react-icons/go";
interface SlideItem {
    title: string;
    head: string;
    para: string;
}
type SlideArray = SlideItem[];
export default function HeroSection() {
    const [index, setIndex] = useState<number>(0);
    const arr: SlideArray = [
        {
            title: "KHAWAJA YANNI",
            head: "The new era of luxury",
            para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit placeat",
        },
        {
            title: "KHAWAJA YANNI",
            head: "Crafting timeless elegance",
            para: "Praesentium doloremque voluptate quod ullam cum distinctio inventore atque.",
        },
        {
            title: "KHAWAJA YANNI",
            head: "The Luxury redefined",
            para: "Doloremque odit eligendi repellendus adipisci. Sapiente quasi sed quos ipsa.",
        },
        {
            title: "KHAWAJA YANNI",
            head: "Experience the perfection",
            para: "Voluptatum maiores sequi, animi accusantium quaerat debitis hic consectetur.",
        },
    ]
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex flex-col text-center text-white h-full ">
                <Navbar />


                <div className="relative w-full md:w-[500px] h-full md:ml-42 bg-black/40 shadow-lg text-start flex flex-col justify-around px-6 md:px-0 py-10 text-white rounded-2xl overflow-hidden">
                    <div className="relative w-full h-[250px]">
                        {arr.map((x:SlideItem, i:number) => (
                            <div
                                key={i}
                                className={`absolute inset-0 flex flex-col gap-6 transition-opacity duration-700 ease-in-out ${index === i ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <p className="text-[14px] tracking-widest">{x.title}</p>
                                <h1 className="text-5xl md:text-6xl leading-tight">
                                    {x.head}
                                </h1>
                                <p className="text-[14px] pb-4 pr-6 md:pr-12">{x.para}</p>
                                <CustomButton label="Book Reservation Now" width="270px" icon={true} />
                            </div>
                        ))}
                    </div>


                    <div className="flex justify-end gap-0 mt-6 mr-8">
                        {arr.map((_:SlideItem, i:number) => (
                            <GoDotFill
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`cursor-pointer text-lg transition-all duration-300 ${index === i ? "text-white scale-120" : "text-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
