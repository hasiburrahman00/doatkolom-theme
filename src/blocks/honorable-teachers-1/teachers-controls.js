const { TextControl} = wp.components
import ImagePicker from "../../components/image-picker"

export default function TeachersControls({attributes, setAttributes}) {
     const handleImageUpload = (val,index)=>{
        attributes.teachers_image[index] = val
        setAttributes({
            teachers_image: [
                ...attributes.teachers_image
            ]
        })
    }

    return (
        <div className="space-y-5">

            {attributes.teachers_image.map((item,index)=>(
                <div key = {index}>
                    <ImagePicker
                        label="Teachers"
                        value={item}
                        onChange={ ( url ) => handleImageUpload(url,index) }
                    />

                    </div>
                ))}

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