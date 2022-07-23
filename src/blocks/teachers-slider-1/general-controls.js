const { TextControl, TextareaControl } = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
     const handleImageUpload = (val,index,images)=>{
        attributes.teachers[index][images] = val
        setAttributes({
            teachers: [
                ...attributes.teachers
            ]
        })
    }

     const handleTextChange = (val,index,type)=>{
        attributes.teachers[index][type] = val
        setAttributes({
            teachers: [
                ...attributes.teachers
            ]
        })
    }

    return (
        <div className="space-y-5">
            {attributes.teachers.map((item,index)=>(
                <div key = {index} className = "space-y-5">
                    <ImagePicker
                        label="Teacher Image"
                        value={item.image}
                        onChange={ ( url ) => handleImageUpload(url,index,'image') }
                    />
                    <div className="border border-solid border-gray-300 p-5 bg-gray-100 space-y-5">
                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Speach"
                            value={item.speach}
                            onChange={ ( value ) => handleTextChange(value,index,'speach')}
                        />
                        <TextControl
                            className="w-full"
                            label="Teacher Name"
                            value={item.name}
                            onChange={ ( value ) => handleTextChange(value,index,'name') }
                        />

                        <TextControl
                            className="w-full"
                            rows="6"
                            label="Position"
                            value={item.position }
                            onChange={ ( value ) => handleTextChange(value,index,'position')}
                        />
                    </div>
                    </div>
                ))}
        </div>
    )
}