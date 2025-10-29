import hero from '../../assets/hero.png'
import CustomButton from './CustomButton';
import Navbar from './Navbar';
export default function HeroSection() {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col text-center text-white h-full ">
                <Navbar />

                <div className="relative w-full md:w-[500px] h-full md:ml-42 bg-black/40  shadow-lg  text-start flex flex-col justify-center gap-8 px-6 md:px-0">

                    <p className='text-[14px]'>KHAWAJA YANNI</p>
                    <p className='text-6xl'>The new <br /> era of luxury</p>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Reprehenderit placeat </p>
                    <CustomButton label='Book Reservation Now' width='230px'/>

                </div>

            </div>
        </div>
    );
}
