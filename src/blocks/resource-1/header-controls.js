const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function HeaderControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <h2>Title</h2>

                <TextControl
                    className="w-full"
                    label="Title"
                    value={ attributes.title }
                    onChange={ ( value ) => setAttributes({title: value}) }
                />

            <h2>Sub Title</h2>

                <TextControl
                    className="w-full"
                    label="Link"
                    value={ attributes.sub_title }
                    onChange={ ( value ) => setAttributes({sub_title: value}) }
                />

        </div>
    )
}