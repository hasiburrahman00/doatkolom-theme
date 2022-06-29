const { TextControl, TextareaControl } = wp.components
import Repeater from "../../components/repeater"
import ImagePicker from "../../components/image-picker"

export default function AchivementControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({achivments:[
            ...attributes.achivments,
            {
                icon: doatkolom_object.blocks + 'about-1/img/running-years.svg',
                number: '200+',
                description: "Professional Awards"
            }
        ]})
    }

    const handleNumber = (val,index,num)=>{
        attributes.achivments[index][num] = val
        setAttributes({
            achivments: [
                ...attributes.achivments
            ]
        })
    }

    const handleImageUpload = (val,index,bg)=>{
        attributes.achivments[index][bg] = val
        setAttributes({
            achivments: [
                ...attributes.achivments
            ]
        })
    }

    const requestDelete = (index)=>{
        attributes.achivments.splice(index,1)
         setAttributes({achivments : [
             ...attributes.achivments
         ]})
     }

     const handleDescription = (val,index,num)=>{
        attributes.achivments[index][num] = val
        setAttributes({
            achivments: [
                ...attributes.achivments
            ]
        })
    }

    return (
        <div className="space-y-5">
            <Repeater label = "Achivements" addNewRequest = {addNewRequest}>
                {
                    attributes.achivments.map((item,index)=>(
                        <Repeater.Item key={index} title = {item.description} deleteRequest = {()=>requestDelete(index)}>

                             <ImagePicker
                                label="Select Image"
                                value={item.icon}
                                onChange={ ( url ) => handleImageUpload(url,index,'icon') }
                            />

                            <TextControl
                                key = {index}
                                className="w-full"
                                label="All Numbers"
                                value={ item.number }
                                onChange={ ( value ) => handleNumber(value,index,'number') }
                            />

                            <TextareaControl
                               className="w-full"
                               rows="6"
                               label="Description"
                               value={item.description }
                               onChange={ ( value ) => handleDescription(value,index,'description') }             
                            />

                        </Repeater.Item>
                    ))
                }
            </Repeater>
        </div>
    )
}