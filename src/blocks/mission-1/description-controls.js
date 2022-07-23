const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function DescriptionControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({description: [
            ...attributes.description,
            {
                text: "Do you want senior marketing input without the overhead associated with hiring a full-time CMO? This is where I come in. 50% of my time goes to small companies and the remaining 50% to mid-sized ones. As your part-time CMO, I dive in and your business,"
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.description.splice(index,1)
         setAttributes({description : [
             ...attributes.description
         ]})
     }
 
    const handleTitleChange = (val,index,type)=>{
         attributes.description[index][type] = val
         setAttributes({
            description: [
                 ...attributes.description
             ]
         })
    }
 
    return (
        <div className="space-y-5">
            <Repeater label = "Description" addNewRequest ={addNewRequest}>
                {attributes.description.map((item,index)=>(
                    <Repeater.Item key={index} title = "Do you want senior marketing input without the overhead" deleteRequest = {()=>requestDelete(index)}>
                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Description"
                            value={item.text}
                            onChange={ ( value ) => handleTitleChange(value,index,'text')}
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}