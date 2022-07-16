import React from 'react'
import MenuButton from './Button'
const ImageUpload = (props) => {
  return (
    <>
        <h3>institution logo</h3>
        <div className='w-36 h-36 border border-slate-200 border-solid rounded-md bg-slate-100 relative after:content-[""] after:w-px after:h-[234px] after:bg-slate-200 after:absolute after:top-[-35px] after:right-[-50px] mb-5'>
            <img src={props.img}/>
        </div>
        <MenuButton variant="contained" text="Select Image" bg="#DFE9F1" textcolor="#0E1F36"/>
    </>
  )
}

export default ImageUpload