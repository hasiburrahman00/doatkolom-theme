const { TextControl, TextareaControl } = wp.components
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

        </div>
    )
}