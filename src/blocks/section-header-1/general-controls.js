const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Title"
                value={ attributes.title }
                onChange={ ( value ) => setAttributes({title: value}) }
            />

            <TextareaControl
                className="w-full"
                label="Sub Title"
                value={ attributes.sub_title }
                onChange={ ( value ) => setAttributes({sub_title: value}) }
            />



        </div>
    )
}