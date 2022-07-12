import { useReducer } from "react"

const initialState = {
    logo: doatkolom_object.img + 'institution-logo.webp',
    site_name: "Savar Girls High School"
}

const stateHandler = (state, action) => {

}

export default function Information() {

    const [ attribute, setAttribute ] = useReducer(stateHandler, initialState)

    return (
        <div className="max-w-screen-lg mx-auto mt-5">
            hello world
        </div>
    )
}