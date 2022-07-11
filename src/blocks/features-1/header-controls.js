const { TextControl, TextareaControl } = wp.components

export default function HeaderControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.heading }
                onChange={ heading => setAttributes({heading}) }
            />
            <TextareaControl
                className="w-full"
                label="Description"
                value={ attributes.description }
                onChange={ description => setAttributes({description}) }
            />
        </div>
    )
}