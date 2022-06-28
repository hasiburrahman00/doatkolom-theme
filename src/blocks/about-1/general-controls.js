const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            
            
            <ImagePicker
                label="Select School Image"
                value={attributes.school_image}
                onChange={ ( url ) => setAttributes({school_image: url}) }
            />

            <TextControl
                className="w-full"
                label="Institution Name"
                value={ attributes.heading }
                onChange={ ( value ) => setAttributes({heading: value}) }
            />
        </div>
    )
}