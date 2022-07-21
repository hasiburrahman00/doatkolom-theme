import React from 'react'
import { styled } from '@mui/material/styles';
import { Button} from "@mui/material";

const MenuButton = (props) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#DFE9F1'),
    backgroundColor: '#DFE9F1',
    boxShadow: '0 0 0',
    color: '#0E1F36',
    '&:hover': {
      backgroundColor: '#DFE9F1',
    },
  }));

  return (
    <ColorButton size="large" variant="contained" onClick={props.handleSaveSetting}>{props.children}</ColorButton>
  )
}

export default MenuButton