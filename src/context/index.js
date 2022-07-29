
import useStore from "../utils/store";
import { createContext } from "react"; 
import { SnackbarProvider } from 'notistack';

export const FrontendContext = createContext(null);

export function FrontendContextProvider(props) {

    // Global state
    const [ attribute, setAttribute ] = useStore({
        name    : 'DoatKolom',
        version : '1.0.0',
    })

    return(
        <FrontendContext.Provider value={{attribute, setAttribute}}>
            <SnackbarProvider maxSnack={10}>
                {props.children}
            </SnackbarProvider>
        </FrontendContext.Provider>
    )
}