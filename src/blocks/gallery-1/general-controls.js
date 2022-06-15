const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.image_one}
                onChange={ ( url ) => setAttributes({image_one: url}) }
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.image_two}
                onChange={ ( url ) => setAttributes({image_two: url}) }
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.image_three}
                onChange={ ( url ) => setAttributes({image_three: url}) }
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.image_four}
                onChange={ ( url ) => setAttributes({image_four: url}) }
            />
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.image_five}
                onChange={ ( url ) => setAttributes({image_five: url}) }
            />

           
        </div>
    )
}