const { TextControl, TextareaControl, ToggleControl } = wp.components
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
                label="Title"
                value={ attributes.title }
                onChange={ ( value ) => setAttributes({title: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="Description"
                value={ attributes.description }
                onChange={ ( value ) => setAttributes({description: value}) }
            />

            <ToggleControl
                label="Show Primary Button"
                checked={ attributes.primary_button.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.primary_button,
                        visible: !attributes.primary_button.visible
                    }
                    setAttributes({primary_button: value})
                } }
            />

            {
                attributes.primary_button.visible && 
                <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Primary Button Label"
                        value={ attributes.primary_button.text }
                        onChange={ text => {
                            const value = { ...attributes.primary_button, text }
                            setAttributes({primary_button: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Primary Button URL"
                        value={ attributes.primary_button.url }
                        onChange={ url => {
                            const value = { ...attributes.primary_button, url }
                            setAttributes({primary_button: value})
                        } }
                    />
                </div>
            }

            <ToggleControl
                label="Show Secondary Button"
                checked={ attributes.secondary_button.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.secondary_button,
                        visible: !attributes.secondary_button.visible
                    }
                    setAttributes({secondary_button: value})
                } }
            />

            {
                attributes.secondary_button.visible && 
                <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Secondary Button Label"
                        value={ attributes.secondary_button.text }
                        onChange={ text => {
                            const value = { ...attributes.secondary_button, text }
                            setAttributes({secondary_button: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Secondary Button URL"
                        value={ attributes.secondary_button.url }
                        onChange={ url => {
                            const value = { ...attributes.secondary_button, url }
                            setAttributes({secondary_button: value})
                        } }
                    />
                </div>
            }
        </div>
    )
}