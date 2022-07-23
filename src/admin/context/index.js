import { createContext, useEffect } from "react"; 
import { SnackbarProvider } from 'notistack';

import AdminPageSkeleton from "../../skeleton/admin-page";
import useStore from "./../../utils/store";
import API from './../api';
import Navbar from "../components/Navbar";

const $ = window.jQuery;

export const AdminContext = createContext(null);
export function AdminContextProvider(props) {

    // Global state
    const [ attribute, setAttribute ] = useStore({
        site_name   : 'DoatKolom',
        version     : '1.0.0',
        logo        : doatkolom_object.img + 'logo.webp',
        save_setting_loader: false,
        header_css: {},
    })

    useEffect(()=>{

        $(document).trigger( 'wp-window-resized' );

        if( !attribute.setting_fields ) {
            API.setting_fields().then(res => {
                setAttribute({ setting_fields: res })
            })
        }

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
                <Navbar menu={props.menu}/>
                <main className="mt-28">
                    { attribute.setting_fields ? props.children : <AdminPageSkeleton/> }
                </main>
            </SnackbarProvider>
        </AdminContext.Provider>
    )
}