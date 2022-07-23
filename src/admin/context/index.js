import { createContext, useEffect, useState } from "react"; 
import { SnackbarProvider } from 'notistack';

import AdminPageSkeleton from "../../skeleton/admin-page";
import useStore from "./../../utils/store";
import API from './../api';
import MemoedNavbar from "../components/Navbar";

export const AdminContext = createContext(null);
export function AdminContextProvider(props) {

    // for global state
    const [ attribute, setAttribute ] = useStore({})

    // for navbar component
    const [ saveButton, setSaveButton ] = useState({
        text: 'Save Now',
        loading: false
    })

    useEffect(()=>{

        if( !attribute.setting_fields ) {
            API.setting_fields().then(res => {
                setAttribute({ setting_fields: res })
            })
        }

    },[])

    return(
        <AdminContext.Provider value={{attribute, setAttribute}}>
            <SnackbarProvider maxSnack={10}>
                <MemoedNavbar saveButton={saveButton} setSaveButton={setSaveButton} menu={props.menu}/>
                <main className="mt-28">
                    { attribute.setting_fields ? props.children : <AdminPageSkeleton/> }
                </main>
            </SnackbarProvider>
        </AdminContext.Provider>
    )
}