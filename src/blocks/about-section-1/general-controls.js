const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            
            

            <TextControl
                className="w-full"
                label="Institution Name"
                value={ attributes.institution_name }
                onChange={ ( value ) => setAttributes({institution_name: value}) }
            />

            
            

        </div>
    )
}