import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const handleImageUpload = (val,index)=>{
        attributes.images[index] = val
        setAttributes({
            images: [
                ...attributes.images
            ]
        })
    }

    return (
        <div className="space-y-5">
            {attributes.images.map((item,index)=>(
                <div key={index}>
                    <ImagePicker
                        label="Select Image"
                        value={item}
                        onChange={ ( url ) => handleImageUpload(url,index) }
                    />
                </div>
            ))}
        </div>
    )
}