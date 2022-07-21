import React from 'react'
import { useReducer } from "react"
import { Link } from 'react-router-dom';
import MenuButton from './Button';
import LoadingButton from '@mui/lab/LoadingButton';


const initialState = {
    logo: doatkolom_object.img + 'doatkolom-logo.webp',
    save_setting_loader: false
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

const Navbar = () => {

    const [ attribute, setAttribute ] = useReducer(stateHandler, initialState)

    const handleSaveSetting = () => {
        setAttribute({save_setting_loader: true})
        console.log("click")
    }

    return (
        <div className="my-5">
            <div className="bg-white py-3 px-6">
                <div className="flex">
                    <div className="w-2/6">
                        <img src={attribute.logo}/>
                    </div>
                    <div className="w-4/6 flex justify-end items-center">
                        <Link className="text-primary inline-block mr-7 text-lg font-medium" to="/">Home</Link>
                        <Link className="text-primary inline-block mr-7 text-lg font-medium" to="/gallery">Photo Gallery</Link>
                        <Link className="text-primary inline-block mr-7 text-lg font-medium" to="/developer">Developer Option</Link>
                        <div>
                            <MenuButton variant="contained" text="Get Support" bg="#DFE9F1" textcolor="#0E1F36" />
                        </div>
                        <div className="ml-5">
                            {attribute.save_setting_loader
                                ?
                                <LoadingButton loading variant="outlined">
                                    Submit
                                </LoadingButton>
                                :
                                <MenuButton handleSaveSetting={handleSaveSetting} variant="contained" text="Save Settings" bg="#1879C7" textcolor="#fff"/>
                                    
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar