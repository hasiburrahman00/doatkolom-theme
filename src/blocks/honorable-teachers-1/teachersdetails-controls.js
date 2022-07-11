const { TextControl, TextareaControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function TeacherDetailsControls({attributes, setAttributes}) {
     const handleImageUpload = (val,index,images)=>{
        attributes.honorable_teacher[index][images] = val
        setAttributes({
            honorable_teacher: [
                ...attributes.honorable_teacher
            ]
        })
    }

     const handleTitleChange = (val,index,type)=>{
        attributes.honorable_teacher[index][type] = val
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

                    <TextControl
                        className="w-full"
                        label="Teacher Namme"
                        value={item.names}
                        onChange={ ( value ) => handleTitleChange(value,index,'names') }
                    />

                    <TextControl
                        className="w-full"
                        rows="6"
                        label="Position"
                        value={item.position }
                        onChange={ ( value ) => handleTitleChange(value,index,'position')}
                    />

                    <TextareaControl
                        className="w-full"
                        rows="6"
                        label="Speaches"
                        value={item.speach}
                        onChange={ ( value ) => handleTitleChange(value,index,'speach')}
                    />

                    </div>
                ))}

        </div>
    )
}