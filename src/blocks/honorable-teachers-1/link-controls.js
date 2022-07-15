const { TextControl} = wp.components

export default function LinkControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextControl
                className="w-full"
                label="Text"
                value={ attributes.more_info.text }
                onChange={ ( text ) => {
                    attributes.more_info.text = text
                    const value = {...attributes.more_info,text}
                    setAttributes({more_info:value})
                }}
            />
            <TextControl
                className="w-full"
                label="Link"
                value={ attributes.more_info.link }
                onChange={ ( link ) => {
                    attributes.more_info.link = link
                    const value = {...attributes.more_info,link}
                    setAttributes({more_info:value})
                }}
            />
        </div>
    )
}