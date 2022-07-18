import React, { useState } from 'react'

const ColorPicker = (props) => {
    let [selectedColor,setColor] = useState(props.selectedColor)

    let handleColorChange = (e) => {
        setColor(e.target.value)
        console.log(e.target.value)
    }   

  return (
    <div>
        <h1>{selectedColor}</h1>
        <label for={props.selector} className={`relative after:w-[40px] after:h-[40px] after:bg-[${selectedColor}] after:rounded-full after:content-[""] after:absolute after:top-[-20px] after:left-0 after:border-1 after:border-solid after:border-white`}></label>
        <input onChange={handleColorChange} id={props.selector} type="color" className='opacity-0 my-4'/>
        <div ></div>
    </div>
  )
}

export default ColorPicker