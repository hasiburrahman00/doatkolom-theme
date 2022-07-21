import React, { useState } from 'react'
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
    const [authentication,setAuthentication] = React.useState(false)
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const handleAuthentication = () => {
      setAuthentication(true)
    }

    const handleRemove = () => {
      setAuthentication(false)
    }
  
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
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color1"/>
                    <p className="font-medium text-sm">Primary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color2"/>
                    <p className="font-medium text-sm">Primary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color3"/>
                    <p className="font-medium text-sm">Primary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color3"/>
                    <p className="font-medium text-sm">Primary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color4"/>
                    <p className="font-medium text-sm">Secondary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color5"/>
                    <p className="font-medium text-sm">Secondary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color6"/>
                    <p className="font-medium text-sm">Secondary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color7"/>
                    <p className="font-medium text-sm">Secondary</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color8"/>
                    <p className="font-medium text-sm">Secondary 80</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color9"/>
                    <p className="font-medium text-sm">Secondary 80</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color10"/>
                    <p className="font-medium text-sm">Secondary 80</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color11"/>
                    <p className="font-medium text-sm">Secondary 80</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color7"/>
                    <p className="font-medium text-sm">Secondary 60</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color8"/>
                    <p className="font-medium text-sm">Secondary 60</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color9"/>
                    <p className="font-medium text-sm">Secondary 60</p>
                </div>
                <div className='w-[24%] flex'>
                    <ColorPicker selector="color10"/>
                    <p className="font-medium text-sm">Secondary 60</p>
                </div>
            </div>

            <h4 className='text-base mt-7'>Authentication Token</h4>
            <div className=' w-full flex justify-between'>
              <div className='w-9/12'>
                <InputBox/>
              </div>
              <div className='mt-4'>
                {authentication
                  ?
                  <button onClick={handleRemove} className='py-3.5 px-8 border-0 bg-secondary text-white font-semibold text-base box-border rounded'>Remove</button>
                  :
                  <button onClick={handleAuthentication} className='py-3.5 px-8 border-0 bg-primary text-white font-semibold text-base box-border rounded'>Authenticate</button>
                }
                
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }