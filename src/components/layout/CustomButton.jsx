import React from 'react'

function CustomButton(props) {
    const { label,width} = props
    return (
        <button style={{ width: width ? width : '135px' }} className={`bg-[linear-gradient(to_bottom,#B89354,#D2B06B,#d6b77a)]  rounded-2xl  h-auto py-3 cursor-pointer`}>{label}</button>
    )
}

export default CustomButton