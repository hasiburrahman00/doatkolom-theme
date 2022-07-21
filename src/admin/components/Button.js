import React from 'react'
import { styled } from '@mui/material/styles';
import { Button} from "@mui/material";



const MenuButton = (props) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(props.bg),
    backgroundColor: props.bg,
    boxShadow: '0 0 0',
    color: props.textcolor,
    '&:hover': {
      backgroundColor: props.bg,
    },
  }));

  return (
    <ColorButton onClick={props.handleSaveSetting} variant={props.variant}>{props.text}</ColorButton>
  )
}

export default MenuButton