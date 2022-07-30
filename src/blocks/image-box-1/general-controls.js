const { TextControl, TextareaControl } = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function BoxControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({image_box: [
            ...attributes.image_box,
            {
                image: doatkolom_object.blocks + 'image-box-1/img/money.webp',
                title: "Affordable fees",
                description: "This is an important thing that every parent looks at when paying fees. You must always expect the fees to be low so that more people can benefit.",
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.image_box.splice(index,1)
            setAttributes({image_box : [
                ...attributes.image_box
            ]
        })
    }
 
    const handleChange = (val,index,type)=>{
        attributes.image_box[index][type] = val
        setAttributes({
            image_box: [
                ...attributes.image_box
            ]
        })
    }
 
    return (
        <div className="space-y-5">
            <Repeater label="Image Box" addNewRequest={addNewRequest}>
                {attributes.image_box.map((item,index)=>(
                    <Repeater.Item key={index} title = {item.title} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Select Image"
                            value={item.image}
                            onChange={ ( url ) => handleChange(url,index,'image') }
                        />

                        <TextControl
                                className="w-full"
                                label="Title"
                                value={item.title}
                                onChange={ ( value ) => handleChange(value,index,'title') }
                        />

                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Description"
                            value={item.description }
                            onChange={ ( value ) => handleChange(value,index,'description')}
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}