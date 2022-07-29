import { memo, useEffect, useRef } from "react"
import { Link, useLocation } from 'react-router-dom';
import { Button, styled } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
const $ = window.jQuery;

function Navbar(props) {

    const { saveButton } = props
    const headerRef = useRef(null);
    const location = useLocation();

    const handleSaveSetting = () => {
        if( location.pathname !== '/gallery' && props.onSave && typeof props.onSave === 'function' ) {
            props.onSave();
        } else {
            console.log('save gallery')
        }
    }

    useEffect(() => {
        $(document).trigger( 'wp-window-resized' );
    },[])

    $(document).on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
        if( eventData.state === 'open' || eventData.state === 'folded' && headerRef.current ) {
            const sidebarWidth      = $('#adminmenuwrap').outerWidth();
            const adminBarHeight    = $('#wpadminbar').outerHeight();
            
            $(headerRef.current).css({
                left: sidebarWidth + 'px',
                top: adminBarHeight + 'px',
                width: `calc(100% - ${sidebarWidth}px)`
            })
        }

        if( eventData.state === 'responsive' && headerRef.current ) {
            $(headerRef.current).css({
                left: 0,
                top: 0,
                width: `100%`
            })
        }
    });

    const SupportButton = styled(Button)`
        background-color: #DFE9F1;
        color: #0E1F36;
        font-size: 16px;
        text-transform: capitalize;
        padding: 8px 25px;
        border-radius: 8px;
        &:hover {
            background-color: #bac8d3;
        }
    `

    const loadingButtonStyle = {
        boxShadow: 'none',
        textTransform: 'capitalize',
        fontSize: '16px',
        borderRadius: '8px',
        '&:hover': { 
            boxShadow: 'none'
        }
    }
    
    return (
        <header ref={headerRef} className="bg-white py-1 px-7 w-full fixed z-20 top-0 left-0 border-t-0 border-x-0 border-b border-solid border-[#ddd]">
            <div className="flex">
                <div className="w-2/6 flex items-center space-x-2 text-2xl font-weight_primary text-[#1879C7]">
                    <picture>
                        <img width="50" height="50" className="lazyload" data-src={`${doatkolom_object.img + 'logo.webp'}`}/>
                    </picture>
                    <span>DoatKolom</span>
                </div>
                <div className="w-4/6 flex justify-end items-center">
                    { props.menu.map( item => (
                        <Link 
                            key={item.name}
                            className={`${ location.pathname === item.path ? 'text-[#16aaca] focus:text-[#16aaca]' : 'text-[#003646]' } no-underline inline-block mr-7 text-base hover:underline focus:shadow-none font-medium`} 
                            to={item.path}>{item.name}</Link>
                    ) ) }
                    
                    <div className="flex items-center space-x-5">
                        <SupportButton size="large">Get Support</SupportButton>
                        <LoadingButton 
                            sx={loadingButtonStyle} 
                            variant="contained" size="large" 
                            onClick={handleSaveSetting}
                            disabled={saveButton.disable}
                            loading={saveButton.loading}>
                                { saveButton.text }
                        </LoadingButton>
                    </div>
                </div>
            </div>
        </header>
    )
}

const MemoedNavbar = memo(Navbar)
export default MemoedNavbar;