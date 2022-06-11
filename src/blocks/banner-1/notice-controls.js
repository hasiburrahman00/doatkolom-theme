const { TextControl } = wp.components

export default function NoticeControls({attributes, setAttributes}) {
    
    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Notice Title"
                value={ attributes.notice_title }
                onChange={ ( value ) => setAttributes({notice_title: value}) }
            />

            <TextControl
                className="w-full"
                label="Notice Subtitle"
                value={ attributes.notice_description }
                onChange={ ( value ) => setAttributes({notice_description: value}) }
            />

            <TextControl
                className="w-full"
                label="Notice Page URL"
                value={ attributes.notice_url }
                onChange={ ( value ) => setAttributes({notice_url: value}) }
            />
        </div>
    )
}