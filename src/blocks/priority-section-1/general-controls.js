const { TextControl, TextareaControl,RangeControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            
            <ImagePicker
                label="Select Background Image"
                value={attributes.background}
                onChange={ ( url ) => setAttributes({background: url}) }
            />

            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.heading }
                onChange={ ( value ) => setAttributes({heading: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="Sub Heading"
                value={ attributes.sub_heading }
                onChange={ ( value ) => setAttributes({sub_heading: value}) }
            />

            <RangeControl
                label="Sub Heading Width"
                value={ attributes.header_width}
                onChange={ ( value ) => setAttributes({header_width: value}) }
                min={ 409 }
                max={ 680 }
            />

        </div>
    )
}