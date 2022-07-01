const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function HeaderControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.title }
                    onChange={ ( value ) => setAttributes({title: value}) }
                />

                <TextControl
                    className="w-full"
                    label="Sub Title"
                    value={ attributes.sub_title }
                    onChange={ ( value ) => setAttributes({sub_title: value}) }
                />

        </div>
    )
}