const { TextControl, TextareaControl, ToggleControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const onTeacherImageChange = (url, index) => {
        const   
            images = attributes.teachers_image;
            images[index] = url;
        setAttributes({teachers_image: [...images]})
    }

    return (
        <div className="space-y-5">
            
            <ImagePicker
                label="Select Headmaster Image"
                value={attributes.image}
                onChange={ ( url ) => setAttributes({image: url}) }
            />

            <TextareaControl
                className="w-full"
                label="Headmaster Quotes"
                value={ attributes.speech }
                onChange={ ( value ) => setAttributes({speech: value}) }
            />

            <TextControl
                className="w-full"
                label="Headmaster Name"
                value={ attributes.name }
                onChange={ ( value ) => setAttributes({name: value}) }
            />
            
            <TextareaControl
                className="w-full"
                label="Headmaster Designation"
                value={ attributes.designation }
                onChange={ ( value ) => setAttributes({designation: value}) }
            />

            <ImagePicker
                label="Select Teacher Image 1"
                value={attributes.teachers_image[0]}
                onChange={ url => onTeacherImageChange(url, 0) }
            />

            <ImagePicker
                label="Select Teacher Image 2"
                value={attributes.teachers_image[1]}
                onChange={ url => onTeacherImageChange(url, 1) }
            />

            <ImagePicker
                label="Select Teacher Image 3"
                value={attributes.teachers_image[2]}
                onChange={ url => onTeacherImageChange(url, 2) }
            />
            
            <TextControl
                className="w-full"
                label="Teachers Page URL"
                value={ attributes.teachers_page_link }
                onChange={ ( value ) => setAttributes({teachers_page_link: value}) }
            />
            
            <ToggleControl
                label="Show Teacher Page Button"
                checked={ attributes.teachers_page.visible }
                onChange={ () => {
                    const value = {
                        ...attributes.teachers_page,
                        visible: !attributes.teachers_page.visible
                    }
                    setAttributes({teachers_page: value})
                } }
            />

            { 
                /**
                 * 
                 * Primary button controls
                 * @author ashraf
                 * @since 1.0.0
                 */ 
                attributes.teachers_page.visible && 
                <div className="border border-solid border-gray-300 p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Button Label"
                        value={ attributes.teachers_page.text }
                        onChange={ text => {
                            const value = { ...attributes.teachers_page, text }
                            setAttributes({teachers_page: value})
                        } }
                    />
                    <TextControl
                        className="w-full"
                        label="Button URL"
                        value={ attributes.teachers_page.link }
                        onChange={ link => {
                            const value = { ...attributes.teachers_page, link }
                            setAttributes({teachers_page: value})
                        } }
                    />
                </div>
            }
        </div>
    )
}