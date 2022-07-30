const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function HistoryControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextControl
                className="w-full"
                label="History Title"
                value={ attributes.history_title }
                onChange={ ( value ) => setAttributes({history_title: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="6"
                label="History Excerpt"
                value={ attributes.history_description }
                onChange={ ( value ) => setAttributes({history_description: value}) }
            />

            <ToggleControl
                label="Show Read More Button"
                checked={ attributes.history_read_more_btn.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.history_read_more_btn,
                        visible: !attributes.history_read_more_btn.visible
                    }
                    setAttributes({history_read_more_btn: value})
                } }
            />
            
            { 
                /**
                 * 
                 * History Read More Button
                 * @author ashraf
                 * @since 1.0.0
                 */ 
                attributes.history_read_more_btn.visible && 
                <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Read More Button"
                        value={ attributes.history_read_more_btn.text }
                        onChange={ text => {
                            const value = { ...attributes.history_read_more_btn, text }
                            setAttributes({history_read_more_btn: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Button URL"
                        value={ attributes.history_read_more_btn.url }
                        onChange={ url => {
                            const value = { ...attributes.history_read_more_btn, url }
                            setAttributes({history_read_more_btn: value})
                        } }
                    />
                </div>
            }
        </div>
    )
}