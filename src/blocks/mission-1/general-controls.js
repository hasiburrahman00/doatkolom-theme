const { TextControl,ColorPicker , TextareaControl} = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">   
            
            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.title }
                onChange={ ( value ) => setAttributes({title: value}) }
            />

            <TextareaControl
                className="w-full"
                rows="15"
                label="Description"
                value={attributes.description}
                onChange={ description => setAttributes({description})}
            />

            <div>
                <label className="block mb-2">Highlight Color</label>
                <ColorPicker
                    color={attributes.highlight_color}
                    onChange={ highlight_color => setAttributes({highlight_color})}
                />
            </div>

            <ImagePicker
                label="Select Background Image"
                value={attributes.background}
                onChange={ ( url ) => setAttributes({background: url}) }
            />
        </div>
    )
}