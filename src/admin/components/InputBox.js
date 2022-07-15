import React from 'react'
import {FormControl, InputLabel,TextField} from '@mui/material'

const InputBox = (props) => {
  return (
    <>
        <h3 className='text-base font-medium'>{props.title}</h3>
        <TextField fullWidth id="fullWidth"/>
    </>
  )
}

export default InputBox