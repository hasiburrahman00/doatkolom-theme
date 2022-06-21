const { TextControl, TextareaControl, ToggleControl,RangeControl } = wp.components
import ImagePicker from "../../components/image-picker"
import Repeater from "../../components/repeater"

export default function LocationImageControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({background: [
            ...attributes.background,
            {
                image: "Upload Image",
            }
        ]})
    }

    const requestDelete = (index)=>{
       attributes.background.splice(index,1)
        setAttributes({background : [
            ...attributes.background
        ]})
    }


    const handleImageUpload = (val,index,bg)=>{
        attributes.background[index][bg] = val
        setAttributes({
            background: [
                ...attributes.background
            ]
        })
    }

    return (
        <div className="space-y-5">

            <Repeater label = "Images" addNewRequest = {addNewRequest}>
                {
                    attributes.background.map((item,index)=>(
                        <Repeater.Item key={index} title = "Location Images" deleteRequest = {()=>requestDelete(index)}>

                             <ImagePicker
                                label="Select Image"
                                value={item.image}
                                onChange={ ( url ) => handleImageUpload(url,index,'image') }
                            />

                        </Repeater.Item>
                    ))

                }
            </Repeater>

        </div>
    )
}