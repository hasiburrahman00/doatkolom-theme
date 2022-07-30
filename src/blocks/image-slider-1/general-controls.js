import ImagePicker from "../../components/image-picker"
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes, setAttributes, refreshBlock}) {

    const addNewRequest = ()=>{
        setAttributes({images: [
            ...attributes.images,
            doatkolom_object.blocks + 'image-slider-1/img/slider1.webp',
        ]})
        refreshBlock()
    }

    const requestDelete = (index)=>{
        attributes.images.splice(index,1)
         setAttributes({images : [
             ...attributes.images
         ]})
         refreshBlock()
     }

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
            <Repeater label="Image Slider" addNewRequest={addNewRequest}>
                {attributes.images.map((item,index)=>(
                    <Repeater.Item key={index} title={`${index + 1}# Image`} deleteRequest={()=>requestDelete(index)}>
                        <ImagePicker
                            label="Select Image"
                            value={item}
                            onChange={ ( url ) => handleImageUpload(url,index) }
                        />     
                    </Repeater.Item>
                ))}
            </Repeater>
        </div>
    )
}