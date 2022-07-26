import Play from '../icons/play';
import { Modal, Backdrop, Fade, Box } from '@mui/material';
import { useState, createContext, useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PanelContext = createContext(null);
export default function Panel(props) {
    const Component = props.accordion ? Accordion : 'div'
    return (
        <div className='bg-white mb-5'>
            <PanelContext.Provider value={{accordion: props.accordion}}>
                <Component style={{boxShadow: 'none'}}>{props.children}</Component>
            </PanelContext.Provider>
        </div>
    )
}

Panel.Header = function(props) {

    const { accordion } = useContext(PanelContext);
    
    if( accordion ) {
        const style = {
            backgroundColor: '#DAECFA',
            boxShadow: 'none',
            fontSize: '1.25rem',
            padding: '8px 35px',
            fontWeight: '500'
        }
        return (
            <AccordionSummary sx={style} expandIcon={<ExpandMoreIcon />}>
                {props.children}
            </AccordionSummary>
        )
    }

    return (
        <div className='px-8 py-3 bg-[#DAECFA] flex items-center justify-between text-[#101010]'>
            <h2 className='text-xl p-0 m-0'>{props.children}</h2>
            <button className='flex transition duration-200 items-center space-x-2 bg-transparent cursor-pointer border-none text-base hover:text-[#1879C7]'>
                <Play/>
            </button>
        </div>
    )
}

Panel.VideoHeader = function(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24
    };

    return (
        <div>
            <div className='px-8 py-3 bg-[#DAECFA] flex items-center justify-between text-[#101010]'>
                <h2 className='text-xl p-0 m-0'>{props.children}</h2>
                <button onClick={() => setModalVisible(true)} className='flex transition duration-200 items-center space-x-2 bg-transparent cursor-pointer border-none text-base hover:text-[#1879C7]'>
                    <span>Watch tutorial</span>
                    <Play/>
                </button>
            </div>
            <Modal
                open={modalVisible}
                onClose={() => setModalVisible(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalVisible}>
                    <Box sx={style}>
                        <iframe className='-mb-2 lazyload' width="850" height="478" data-src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

Panel.Body = function(props) {
    return (
        <div className="py-6 px-8">
            {props.children}
        </div>
    )
}