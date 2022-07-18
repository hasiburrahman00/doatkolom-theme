import React from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import InputBox from './components/InputBox';
import ColorPicker from './components/ColorPicker';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `0`,
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? '#DAECFA'
        : '#DAECFA',
    flexDirection: 'row-reverse',
    padding: '10px',
    '& .MuiAccordionSummary-expandIconWrapper': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '20px'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg) translateX(-50%)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0',
    padding: '40px'
  }));
  
  export default function developer() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
      <div className='max-w-screen-lg mx-auto'>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h2 className='m-0 text-2xl font-bold'>Developer Options <span className='font-normal inline-block ml-auto text-base absolute top-[25px] right-12'>Be careful while you’re changing these fields</span></h2>
          </AccordionSummary>
          <AccordionDetails>
            <h4 className='text-base mt-0'>Primary Font</h4>
            <div className='bg-gray-200 w-full border border-gray-100 border-solid py-5 px-8'>
                <h4 className='text-base'>Google Font URL</h4>
                <InputBox/>
                <h4 className='text-base'>Font Family</h4>
                <div className='w-3/6'>
                    <InputBox/>
                </div>
            </div>

            <h4 className='text-base mt-7'>Secondary Font</h4>
            <div className='bg-gray-200 w-full border border-gray-100 border-solid py-5 px-8'>
                <h4 className='text-base'>Google Font URL</h4>
                <InputBox/>
                <h4 className='text-base'>Font Family</h4>
                <div className='w-3/6'>
                    <InputBox/>
                </div>
            </div>

            <h4 className='text-base mt-7'>Theme Colors</h4>
            <div className='bg-gray-200 w-full border border-gray-100 border-solid py-5 px-8 flex flex-wrap justify-between'>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color1"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color2"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color3"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color3"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color4"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color5"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color6"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color7"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color8"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color9"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color10"/>
                </div>
                <div className='w-[24%]'>
                    <ColorPicker selectedColor="#000" selector="color11"/>
                </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }