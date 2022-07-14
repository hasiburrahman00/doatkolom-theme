import ImagePicker from "../../components/image-picker"
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({images: [
            ...attributes.images,
            doatkolom_object.blocks + 'image-slider/img/slider1.webp',
        ]})
    }

    const requestDelete = (index)=>{
        attributes.images.splice(index,1)
         setAttributes({images : [
             ...attributes.images
         ]})
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
                    <Repeater.Item key={index} title="images" deleteRequest={()=>requestDelete(index)}>
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