const { TextControl, TextareaControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function TeacherImagesControls({attributes, setAttributes}) {
    
     const handleImageUpload = (val,index,images)=>{
        attributes.honorable_teacher[index][images] = val
        setAttributes({
            honorable_teacher: [
                ...attributes.honorable_teacher
            ]
        })
    }

    return (
        <div className="space-y-5">

            {attributes.honorable_teacher.map((item,index)=>(
                <div key = {index}>

                    <ImagePicker
                        label="Teacher Image"
                        value={item.image}
                        onChange={ ( url ) => handleImageUpload(url,index,'image') }
                    />

                    </div>
                ))}

        </div>
    )
}