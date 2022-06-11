const { Button } = wp.components;
export default function ImagePicker({label, value, onChange}) {

    const frame = wp.media({
        title: 'Select Image',
        button: {
            text: 'Use This Image',
        },
        multiple: false,
    })

    frame.on( 'select', function() {
        const attachment = frame.state().get('selection').first().toJSON();
        if( onChange && typeof onChange === 'function' ) {
            onChange(attachment.url, attachment.id)
        }
    });

    return (
        <div className="components-base-control__field">
            <label className="components-base-control__label mb-3 inline-block">{label}</label>
            <div>
                <div className="w-72 h-40 block overflow-hidden rounded-sm border-3 boder-solid border-gray-300 mb-1">
                    <img className="w-full object-cover object-center h-full inline-block" src={value}/>
                </div>
                <Button className="is-primary w-72 justify-center" onClick={() => frame.open()}>Select Image</Button>
            </div>
        </div>
    )
}