
import { FaArrowRightLong } from "react-icons/fa6";
function CustomButton(props) {
    const { label, width, icon } = props
    return (
        <button style={{ width: width ? width : '135px' }} className={`bg-[linear-gradient(to_bottom,#B89354,#D2B06B,#d6b77a)] flex items-center justify-around  rounded-2xl  h-auto py-3 cursor-pointer`}>

            {label}
            {icon && <span><FaArrowRightLong size={22}/></span>}
        </button>
    )
}

export default CustomButton