import React from "react";
import { useReducer } from "react"
import ElementBox from './../components/ElelmentBox'
import Pagination from './../components/Pagination'

const initialState = {
    gallery_img: doatkolom_object.img + 'gallery-img.webp',
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

export default function Gallery() {

    const [ attribute, setAttribute ] = useReducer(stateHandler, initialState)

    return (
        <ElementBox>
            <div className="grid grid-cols-5 gap-5">
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
                <div className="max-w-1/5 max-h-1/5 bg-primary">
                    <picture>
                        <img className="w-full block" src={attribute.gallery_img}/>
                    </picture>
                </div>
            </div>
            <Pagination/>
        </ElementBox>
    )
}