import React from 'react'
import { Button } from "@mui/material";

const MenuButton = (props) => {
  return (
    <Button className='bg-[#DFE9F1]' variant={props.variant}>{props.text}</Button>
  )
}

export default MenuButton