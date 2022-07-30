const { TextControl} = wp.components
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes,setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({number_box: [
            ...attributes.number_box,
                {
                    number: "5000",
                    text: "Total Students"
                }
        ]})
    }
    
    const requestDelete = (index)=>{
        attributes.number_box.splice(index,1)
         setAttributes({number_box : [
             ...attributes.number_box
         ]})
     }
    
    const handleTitleChange = (val,index,type)=>{
         attributes.number_box[index][type] = val
         setAttributes({
            number_box: [
                 ...attributes.number_box
             ]
         })
    }

    return (
        <div className="space-y-5">   
            <Repeater label = "Number Box" addNewRequest ={addNewRequest}>
                {attributes.number_box.map((item,index)=>(
                    <Repeater.Item key={index} title={item.number} deleteRequest={()=>requestDelete(index)}>
                        <TextControl
                            className="w-full"
                            label="Number"
                            value={item.number}
                            onChange={ ( value ) => handleTitleChange(value,index,'number') }
                        />

                        <TextControl
                            className="w-full"
                            label="Text"
                            value={item.text}
                            onChange={ ( value ) => handleTitleChange(value,index,'text')}
                        />
                    </Repeater.Item>
                ))}
            </Repeater>
        </div>
    )
}