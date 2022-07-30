const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function BoxControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({history_box: [
            ...attributes.history_box,
            {
                title: "Madical Health Care Center",
                description: "The school was established on a small scale on 19th April, 1959 at the initiative of some.",
                icon: doatkolom_object.img + 'icons/readmorearrow.svg',
                button: {
                    text: "Read More",
                    visible: true,
                    url: "#" 
                }
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.history_box.splice(index,1)
         setAttributes({history_box : [
             ...attributes.history_box
         ]})
     }
 
    const handleChange = (val,index,type)=>{
         attributes.history_box[index][type] = val
         setAttributes({
            history_box: [
                 ...attributes.history_box
             ]
         })
    }
 

    return (
        <div className="space-y-5">

            <Repeater label = "History Box" addNewRequest ={addNewRequest}>
                {attributes.history_box.map((item,index)=>(
                    <Repeater.Item key={index} title = "All History" deleteRequest = {()=>requestDelete(index)}>
                        <TextareaControl
                                className="w-full"
                                label="Title"
                                value={item.description}
                                onChange={ ( value ) => handleChange(value,index,'description') }
                        />

                        <ToggleControl
                            label="Show Button"
                            checked={ item.see_more.visible }
                            onChange={ () => {
                                    item.see_more = {
                                        ...item.see_more,
                                        visible: !item.see_more.visible
                                    }
                                   setAttributes(item)
                                }
                            }
                        />

                        { 
                            
                             item.see_more.visible && 
                            <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                                <TextControl
                                    className="w-full"
                                    label="Button Label"
                                    value={item.see_more.text}  
                                    onChange={ text => {
                                        item.see_more.text = text
                                        const value = {...item.see_more.text, text }
                                        setAttributes({see_more: value})
                                    } 
                                    } 
                                 />

                                <TextControl
                                    className="w-full"
                                    label="Button URL"
                                    value={ item.see_more.url }
                                    onChange={ url => {
                                        item.see_more.url = url
                                        const value = { ...item.see_more.url, url }
                                        setAttributes({see_more: value})
                                    } 
                                }
                                />
                            </div>
                        }
                    </Repeater.Item>
                ))}
            </Repeater> 

        </div>
    )
}