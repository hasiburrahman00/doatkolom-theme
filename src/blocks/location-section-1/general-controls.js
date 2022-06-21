const { TextControl, TextareaControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.heading }
                onChange={ ( value ) => setAttributes({heading: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="Details"
                value={ attributes.header_details }
                onChange={ ( value ) => setAttributes({header_details: value}) }
            />

          
            <TextControl
                className="w-full"
                label="Preview Link"
                value={ attributes.map_iframe_link }
                onChange={ ( value ) => setAttributes({map_iframe_link: value}) }
            />



            
        </div>
    )
}