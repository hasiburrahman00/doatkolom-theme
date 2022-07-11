const { TextControl, TextareaControl } = wp.components

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Title"
                value={ attributes.heading }
                onChange={ heading => setAttributes({heading}) }
            />

            <TextareaControl
                className="w-full"
                label="Sub Title"
                value={ attributes.description }
                onChange={ description => setAttributes({description}) }
            />
            
        </div>
    )
}