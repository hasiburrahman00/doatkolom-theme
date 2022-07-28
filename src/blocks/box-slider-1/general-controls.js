const { TextControl } = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({box_slider: [
            ...attributes.box_slider,
            {
                background: doatkolom_object.blocks + 'box-slider-1/img/box_slider1.webp',
                text: "Physics" 
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.box_slider.splice(index,1)
         setAttributes({box_slider : [
             ...attributes.box_slider
         ]})
     }

    const handeImageUpload = (val,index,image)=>{
        attributes.box_slider[index][image] = val
        setAttributes({
            box_slider:[
                ...attributes.box_slider
            ]
        })
    }
 
    const handleTitleChange = (val,index,type)=>{
         attributes.box_slider[index][type] = val
         setAttributes({
            box_slider: [
                 ...attributes.box_slider
             ]
         })
    }
 

    return (
        <div className="space-y-5">
            <Repeater label = "Box Slider" addNewRequest ={addNewRequest}>
                {attributes.box_slider.map((item,index)=>(
                    <Repeater.Item key={index} title = {item.text} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Select Image"
                            value={item.background}
                            onChange={ ( url ) => handeImageUpload(url,index,'background') }
                        />

                        <TextControl
                                className="w-full"
                                label="Title"
                                value={item.text}
                                onChange={ ( value ) => handleTitleChange(value,index,'text') }
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}