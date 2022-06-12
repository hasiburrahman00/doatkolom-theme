const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes, setAttributes}) {
    console.log(attributes.event_list)

    let onEventUpdate = (val,index,type)=>{
        attributes.event_list[index][type] = val
        setAttributes({
            event_list:[... attributes.event_list]
        })
    }

    let addNewRequest = ()=>{
        setAttributes({
            event_list:[
                ...attributes.event_list,
                {
                    event_date: 'Date',
                    event_Month: 'Month',
                    event_name: 'Event Name',
                    event_details: 'Event Details',
                    guest: 20
                }
            ]
        })
    }

    let handleEventDelete = (index) => {
        attributes.event_list.splice(index,1)
        setAttributes({
            event_list:[...attributes.event_list]
        })

    }

    return (
        <Repeater label="Event List" addNewRequest={addNewRequest} className="space-y-5">
            {attributes.event_list.map((item,index)=>(
               <Repeater.Item title={item.event_name} deleteRequest={()=>handleEventDelete(index)} key={index}>
                 <TextControl
                    className="w-full"
                    label="Event Date"
                    value={ item.event_date }
                    onChange={ ( value ) => onEventUpdate(value,index,'event_date') }
                />    
                 <TextControl
                    className="w-full"
                    label="Event Month"
                    value={ item.event_month }
                    onChange={ ( value ) => onEventUpdate(value,index,'event_month') }
                />    
                 <TextControl
                    className="w-full"
                    label="Event Name"
                    value={ item.event_name }
                    onChange={ ( value ) => onEventUpdate(value,index,'event_name') }
                />    
                <TextareaControl
                    className="w-full"
                    label="Event Details"
                    value={ item.event_details }
                    onChange={ ( value ) => onEventUpdate(value,index,'event_details') }
                />   
                 <TextControl
                    className="w-full"
                    label="Event Name"
                    value={ item.reademore_link }
                    onChange={ ( value ) => onEventUpdate(value,index,'reademore_link') }
                />
               </Repeater.Item> 
            ))}
            

            

        </Repeater>
    )
}