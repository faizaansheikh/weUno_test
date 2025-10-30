import img from '../../assets/map.png'
import CustomButton from './CustomButton'
function Section6() {
    const imgContent = () => {
        return <div className='w-full h-[470px] md:h-[610px] bg-red-3d00  flex items-center justify-start '>
            <img src={img} alt="" className='w-full h-full md:object-fill mb-12' />
        </div>
    }
    const textContent = () => {
        return <div className=' w-full h-full flex items-start justify-center gap-5 flex-col ml-2 md:ml-6'>
            <p className='tracking-wider'>EXPERIENCE THE GROVES</p>
            <h1 className='text-5xl'>Find your place</h1>
            <p className='pr-4 md:pr-42 lg:pr-10'>Our interactive map will show you the way to the shops and restaurants that you want to see.</p>
            <span className='mt-5'><CustomButton label='Open the Map' width='200px' icon={true}/></span>
        </div>
    }
    return (
        <>
            <div className='hidden lg:flex items-center w-full h-auto px-4 md:px-32 lg:px-52 flex-nowrap '>
                {imgContent()}
                {textContent()}
            </div>

            {/* mobile */}
            <div className='flex mt-16 lg:hidden  w-full h-auto px-4 md:px-32 lg:px-52 flex-wrap '>
                {textContent()}
                {imgContent()}
            </div>
        </>
    )
}

export default Section6