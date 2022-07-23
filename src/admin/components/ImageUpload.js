import React from 'react'
import { Button } from '@mui/material'

const ImageUpload = (props) => {

  const value = props.value || doatkolom_object.img + 'institution-logo.webp';
  const label = props.label || "Image Picker";

  const buttonStyle = {
    boxShadow: 'none',
    width: '9rem',
    fontSize: '14px',
    backgroundColor: '#DFE9F1',
    color: '#0E1F36',
    textTransform: 'capitalize',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#1879C7',
      boxShadow: 'none'
    }
  }

  return (
    <div>
        <label className="text-[#2C2C2C] text-base block mb-2">{label}</label>
        <div className='w-36 h-36 mb-2 border border-solid border-[#DFE9F1] bg-[#FAFAFA] overflow-hidden rounded-lg'>
            <picture>
              <img className='w-full h-full object-contain lazyload' data-src={value}/>
            </picture>
        </div>
        <Button sx={buttonStyle} variant="contained">Select Image</Button>
    </div>
  )
}

export default ImageUpload