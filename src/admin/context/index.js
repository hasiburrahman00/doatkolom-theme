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
        text: 'Loading...',
        loading: false,
        disable: true,
    })

    useEffect(()=>{

        if( !attribute.setting_fields ) {
            API.setting_fields().then(res => {
                setAttribute({ setting_fields: res })
            })

            setSaveButton({
                text: 'Save Now',
                loading: false,
                disable: false
            })
        }

    },[])

    /**
     * 
     * 
     * @function saveButtonHandler preapre form data and send request to backend 
     * this function trigger for saving input fields data
     */ 

    const saveButtonHandler = () => {
        setSaveButton({
            text: 'Saving...',
            loading: true,
            disable: true
        })
        console.log(attribute.setting_fields)
    }

    return(
        <AdminContext.Provider value={{attribute, setAttribute}}>
            <SnackbarProvider maxSnack={10}>
                <MemoedNavbar onSave={saveButtonHandler} saveButton={saveButton} menu={props.menu}/>
                <main className="mt-28">
                    { attribute.setting_fields ? props.children : <AdminPageSkeleton/> }
                </main>
            </SnackbarProvider>
        </AdminContext.Provider>
    )
}