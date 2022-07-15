import ImagePicker from "../../components/image-picker"
export default function LocationImageControls({attributes, setAttributes}) {
    const handleImageUpload = (val,index)=>{
        attributes.images[index]= val
        setAttributes({
            images: [
                ...attributes.images
            ]
        })
    }

    return (
        <div className="space-y-5">
           {
             attributes.images.map((item,index)=>(
                <ImagePicker
                   label="Select Image"
                   value={item}
                   onChange={ ( url ) => handleImageUpload(url,index) }
               />
            ))
           }
        </div>
    )
}