const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            
            <ImagePicker
                label="Select Headmaster Image"
                value={attributes.headmaster_image}
                onChange={ ( url ) => setAttributes({headmaster_image: url}) }
            />

            <TextareaControl
                className="w-full"
                label="Headmaster Quotes"
                value={ attributes.headmaster_quotes }
                onChange={ ( value ) => setAttributes({headmaster_quotes: value}) }
            />

            <TextControl
                className="w-full"
                label="Headmaster Name"
                value={ attributes.headmaster_name }
                onChange={ ( value ) => setAttributes({headmaster_name: value}) }
            />

            <TextareaControl
                className="w-full"
                label="Headmaster Designation"
                value={ attributes.headmaster_designation }
                onChange={ ( value ) => setAttributes({headmaster_designation: value}) }
            />

            <ImagePicker
                label="Select Teacher Image 1"
                value={attributes.teacher_image_one}
                onChange={ ( url ) => setAttributes({teacher_image_one: url}) }
            />

            <ImagePicker
                label="Select Teacher Image 2"
                value={attributes.teacher_image_two}
                onChange={ ( url ) => setAttributes({teacher_image_two: url}) }
            />

            <ImagePicker
                label="Select Teacher Image 3"
                value={attributes.teacher_image_three}
                onChange={ ( url ) => setAttributes({teacher_image_three: url}) }
            />

           

        </div>
    )
}