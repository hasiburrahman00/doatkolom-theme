import Play from '../icons/play';
import { Modal, Backdrop, Fade, Box } from '@mui/material';
import { useState } from 'react';

export default function Panel(props) {
    return (
        <div className='bg-white mb-5'>
            {props.children}
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