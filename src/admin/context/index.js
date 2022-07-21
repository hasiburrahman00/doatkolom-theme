
import useStore from "./../../utils/store";
import { createContext, useEffect } from "react"; 
import { SnackbarProvider } from 'notistack';
const $ = window.jQuery;

export const AdminContext = createContext(null);

export function AdminContextProvider(props) {

    // Global state
    const [ attribute, setAttribute ] = useStore({
        name    : 'DoatKolom',
        version : '1.0.0',
        logo    : doatkolom_object.img + 'doatkolom-logo.webp',
        save_setting_loader: false,
        header_css: {},
    })

    useEffect(()=>{
        $(document).trigger( 'wp-window-resized' );
    },[])

    $(document).on( 'wp-menu-state-set wp-collapse-menu', function( event, eventData ) {
        if( eventData.state === 'open' || eventData.state === 'folded' ) {
            const sidebarWidth      = $('#adminmenuwrap').outerWidth();
            const adminBarHeight    = $('#wpadminbar').outerHeight();
            setAttribute({
                header_css: {
                    left: sidebarWidth + 'px',
                    top: adminBarHeight + 'px',
                    width: `calc(100% - ${sidebarWidth}px)`
                }
            })
        }

        if( eventData.state === 'responsive' ) {
            setAttribute({
                header_css: {
                    left: 0,
                    top: 0,
                    width: `100%`
                }
            })
        }
    });

    return(
        <AdminContext.Provider value={{attribute, setAttribute}}>
            <SnackbarProvider maxSnack={10}>
                {props.children}
            </SnackbarProvider>
        </AdminContext.Provider>
    )
}