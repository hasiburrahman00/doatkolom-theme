const { TextControl, TextareaControl } = wp.components

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.heading }
                onChange={ ( value ) => setAttributes({heading: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="Details"
                value={ attributes.sub_heading }
                onChange={ ( value ) => setAttributes({sub_heading: value}) }
            />

        </div>
    )
}