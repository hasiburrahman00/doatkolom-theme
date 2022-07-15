import React from 'react'
import { Button } from "@mui/material";

const MenuButton = (props) => {
  return (
    <Button variant={props.variant}>{props.text}</Button>
  )
}

export default MenuButton