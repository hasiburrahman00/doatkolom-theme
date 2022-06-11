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
                label="Institution Name"
                value={ attributes.institution_name }
                onChange={ ( value ) => setAttributes({institution_name: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="Institution Description"
                value={ attributes.description }
                onChange={ ( value ) => setAttributes({description: value}) }
            />

            <ToggleControl
                label="Show Primary Button"
                checked={ attributes.primary_btn.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.primary_btn,
                        visible: !attributes.primary_btn.visible
                    }
                    setAttributes({primary_btn: value})
                } }
            />
            
            { 
                /**
                 * 
                 * Primary button controls
                 * @author ashraf
                 * @since 1.0.0
                 */ 
                attributes.primary_btn.visible && 
                <div className="border border-solid border-gray-300 p-5 bg-gray-100 space-y-5">
                    <TextControl
                        className="w-full"
                        label="Primary Button Label"
                        value={ attributes.primary_btn.text }
                        onChange={ text => {
                            const value = { ...attributes.primary_btn, text }
                            setAttributes({primary_btn: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Primary Button URL"
                        value={ attributes.primary_btn.url }
                        onChange={ url => {
                            const value = { ...attributes.primary_btn, url }
                            setAttributes({primary_btn: value})
                        } }
                    />
                </div>
            }

            <ToggleControl
                label="Show Secondary Button"
                checked={ attributes.secondary_btn.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.secondary_btn,
                        visible: !attributes.secondary_btn.visible
                    }
                    setAttributes({secondary_btn: value})
                } }
            />

            { 
                /**
                 * 
                 * Secondary button controls
                 * @author ashraf
                 * @since 1.0.0
                 */ 
                attributes.secondary_btn.visible && 
                <div className="border border-solid border-gray-300 p-5 bg-gray-100 space-y-5">
                    <TextControl
                        className="w-full"
                        label="Secondary Button Label"
                        value={ attributes.secondary_btn.text }
                        onChange={ text => {
                            const value = { ...attributes.secondary_btn, text }
                            setAttributes({secondary_btn: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Secondary Button URL"
                        value={ attributes.secondary_btn.url }
                        onChange={ url => {
                            const value = { ...attributes.secondary_btn, url }
                            setAttributes({secondary_btn: value})
                        } }
                    />
                </div>
            }
            

        </div>
    )
}