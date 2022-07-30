const { TextControl,TextareaControl,ToggleControl} = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextControl
                className="w-full"
                label="Top Heading"
                value={ attributes.top_heading }
                onChange={ ( value ) => setAttributes({top_heading: value}) }
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
                label="Description"
                value={attributes.description }
                onChange={ ( value ) => setAttributes({description: value})}
            />

            <ToggleControl
                label="Show Button"
                checked={ attributes.button.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.button,
                        visible: !attributes.button.visible
                    }
                    setAttributes({button: value})
                } }
            />
            
            {
                attributes.button.visible && 
                <div className="border border-solid border-gray-300 p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Primary Button Label"
                        value={ attributes.button.text }
                        onChange={ text => {
                            const value = { ...attributes.button, text }
                            setAttributes({button: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Button URL"
                        value={ attributes.button.url }
                        onChange={ url => {
                            const value = { ...attributes.button, url }
                            setAttributes({button: value})
                        } }
                    />
                </div>
            }

            <ImagePicker
                label="Select Institution Image"
                value={attributes.institution_image}
                onChange={ ( url ) => setAttributes({institution_image: url}) }
            />
        </div>
    )
}