const { TextControl } = wp.components
import ImagePicker from "../../components/image-picker"
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes, setAttributes}) {
    
    const addNewRequest = ()=>{
        setAttributes({features: [
            ...attributes.features,
            {
                image: doatkolom_object.blocks + 'features-1/img/result.svg',
                label: "Result",
                url  : "#"
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.features.splice(index,1)
         setAttributes({features : [
             ...attributes.features
         ]})
     }
 
    const handleTitleChange = (val,index,type)=>{
         attributes.features[index][type] = val
         setAttributes({
            features: [
                 ...attributes.features
             ]
         })
    }

    return (
        <div className="space-y-5">
            <Repeater label="Feature List" addNewRequest ={addNewRequest}>
                {attributes.features.map((item,index)=>(
                    <Repeater.Item key={index} title={item.label} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Image"
                            value={item.image}
                            onChange={ ( value ) => handleTitleChange(value,index,'image') }
                        />
                        <TextControl
                            className="w-full"
                            label="Label"
                            value={item.label}
                            onChange={ ( value ) => handleTitleChange(value,index,'label') }
                        />
                        <TextControl
                            className="w-full"
                            label="URL"
                            value={item.url}
                            onChange={ ( value ) => handleTitleChange(value,index,'url') }
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}