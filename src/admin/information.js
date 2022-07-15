import { useReducer } from "react"
import MenuButton from "./components/Button";
import SectionTip from "./components/SectionTip";

const initialState = {
    logo: doatkolom_object.img + 'doatkolom-logo.webp',
    site_name: "Savar Girls High School"
}

const stateHandler = (state, action) => {
  // if it is a function, allow to modify full state
    if( typeof action === 'function' ) {
        return action( state );
    }

    // update individual state
    if( typeof action === 'object' ) {
        return {
            ...state,
            ...action
        } 
    }

    return state
}

export default function Information() {

    const [ attribute, setAttribute ] = useReducer(stateHandler, initialState)

    return (
        <div className="m-5">
            <div className="bg-white py-3 px-6">
                <div className="flex">
                    <div className="w-2/6">
                        <img src={attribute.logo}/>
                    </div>
                    <div className="w-4/6 flex justify-end items-center">
                        <div>
                            <MenuButton variant="outlined" text="Get Support" />
                        </div>
                        <div className="ml-5">
                            <MenuButton variant="contained" text="Get Support"/>
                        </div>
                    </div>
                </div>
            </div>
            <SectionTip title="Site Settings"/>
        </div>
    )
}