const { TextControl,ColorPicker } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">   
            <ImagePicker
                label="Select Background Image"
                value={attributes.background}
                onChange={ ( url ) => setAttributes({background: url}) }
            />

            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.title }
                onChange={ ( value ) => setAttributes({title: value}) }
            />

            <div>
                <label className="block mb-2">Highlight Color</label>
                <ColorPicker
                    color={attributes.highlight_color}
                    onChange={ highlight_color => setAttributes({highlight_color})}
                />
            </div>

        </div>
    )
}