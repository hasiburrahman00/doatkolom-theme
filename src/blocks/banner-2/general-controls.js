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
                label="Show Banner Button"
                checked={ attributes.banner_btn.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.banner_btn,
                        visible: !attributes.banner_btn.visible
                    }
                    setAttributes({banner_btn: value})
                } }
            />

            { 
                attributes.banner_btn.visible && 
                <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Banner Button Label"
                        value={ attributes.banner_btn.text }
                        onChange={ text => {
                            const value = { ...attributes.banner_btn, text }
                            setAttributes({banner_btn: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Banner Button URL"
                        value={ attributes.banner_btn.url }
                        onChange={ url => {
                            const value = { ...attributes.banner_btn, url }
                            setAttributes({banner_btn: value})
                        } }
                    />
                </div>
            }
            
        </div>
    )
}