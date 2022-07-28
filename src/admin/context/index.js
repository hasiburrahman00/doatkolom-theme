import { createContext, useEffect, useState } from "react"; 
import { useSnackbar } from 'notistack';

import AdminPageSkeleton from "../../skeleton/admin-page";
import useStore from "./../../utils/store";
import API from './../api';
import MemoedNavbar from "../components/Navbar";

export const AdminContext = createContext(null);
export function AdminContextProvider(props) {

    // for global state
    const [ attribute, setAttribute ] = useStore({})
    const { enqueueSnackbar } = useSnackbar()

    // for navbar component
    const [ saveButton, setSaveButton ] = useState({
        text: 'Loading...',
        loading: false,
        disable: true,
    })

    useEffect(()=>{

        if( !attribute.setting_fields ) {
            API.setting_fields().then(res => {
                if( res.status === 'success' ) {
                    setAttribute({ setting_fields: res.data })
                }
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

        // prepare data for saving: this function helps to create {name: value} object
        const data = {};
        function prepareSaveData(attr) {
            Object.values(attr).map( item => {
                if( item.title && item.fields ) {
                    Object.keys(item.fields).map(name => {
                        // ignore these properties
                        if( !['auth_token'].includes(name) ) {
                            data[name] = item.fields[name].default;
                        }
                    })
                } else {
                    prepareSaveData(item);
                }
            })
        }
        
        prepareSaveData(attribute.setting_fields);

        API.save_settings( data ).then( res => {
            setSaveButton({
                text: 'Save Now',
                loading: false,
                disable: false
            })
            enqueueSnackbar(res.message, { variant: res.status } )
        })
    }

    return(
        <AdminContext.Provider value={{attribute, setAttribute}}>
            <MemoedNavbar onSave={saveButtonHandler} saveButton={saveButton} menu={props.menu}/>
            <main className="mt-28">
                { attribute?.setting_fields ? props.children : <AdminPageSkeleton/> }
            </main>
        </AdminContext.Provider>
    )
}