import React, { useState } from 'react'

const ColorPicker = (props) => {
    let [selectedColor,setColor] = useState("#000")

    let handleColorChange = (e) => {
        setColor(e.target.value)
        console.log(e.target.value)
    }   

  return (
    <div>
        <label for={props.selector} className="relative">
          <div style={{background:`${selectedColor}`}} className='w-[40px] h-[40px] rounded-full content-[""] absolute top-[-20px] left-0  border-1 border-solid border-white'></div>
        </label>
        <input onChange={handleColorChange} id={props.selector} type="color" className='opacity-0 my-4'/>
        
    </div>
  )
}

export default ColorPicker