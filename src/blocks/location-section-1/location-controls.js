const { TextControl } = wp.components

export default function LocationControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Title"
                value={ attributes.location_heading }
                onChange={ ( value ) => setAttributes({location_heading: value}) }
            />

            <TextControl
                className="w-full"
                label="Location"
                value={ attributes.location }
                onChange={ ( value ) => setAttributes({location: value}) }
            />

            <TextControl
                className="w-full"
                label="City"
                value={ attributes.city }
                onChange={ ( value ) => setAttributes({city: value}) }
            />

            <TextControl
                className="w-full"
                label="Text"
                value={ attributes.map_link.text }
                onChange={ (text) => {
                        attributes.map_link.text = text
                        const value = {...attributes.map_link,text}
                        setAttributes({map_link: value})
                    } 
                }
            />

            <TextControl
                className="w-full"
                label="Link"
                value={ attributes.map_link.url }
                onChange={ (url) => {
                        attributes.map_link.url = url
                        const value = {...attributes.map_link,url}
                        setAttributes({map_link: value})
                    } 
                }
            />

        </div>
    )
}