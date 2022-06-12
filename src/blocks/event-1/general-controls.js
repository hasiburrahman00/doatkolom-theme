const { TextControl, TextareaControl, ToggleControl } = wp.components

export default function GeneralControls({attributes, setAttributes}) {
    console.log(attributes.event_list)

    let onEventUpdate = (val,index,type)=>{
        attributes.event_list[index][type] = val
        setAttributes({
            event_list:[... attributes.event_list]
        })
    }

    return (
        <div className="space-y-5">
            {attributes.event_list.map((item,index)=>(
               <div key={index}>
               <h2>Events {index+1} </h2>
                 <TextControl
                    className="w-full"
                    label="Event Name"
                    value={ item.event_name }
                    onChange={ ( value ) => onEventUpdate(value,index,'event_name') }
                />    
                <TextControl
                    className="w-full"
                    label="Event guest"
                    value={ item.guest }
                    onChange={ ( value ) => onEventUpdate(value,index,'guest') }
                />   
               </div> 
            ))}
            

            

        </div>
    )
}