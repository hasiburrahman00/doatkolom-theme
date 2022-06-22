const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function BoxControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({priority_box: [
            ...attributes.priority_box,
            {
                title: "New Title",
                description: "Enter New Description",
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
        attributes.priority_box.splice(index,1)
         setAttributes({priority_box : [
             ...attributes.priority_box
         ]})
     }
 
     const handleTitleChange = (val,index,type)=>{
         attributes.priority_box[index][type] = val
         setAttributes({
            priority_box: [
                 ...attributes.priority_box
             ]
         })
     }
 

    return (
        <div className="space-y-5">

            <Repeater label = "Priority" addNewRequest ={addNewRequest}>
                {attributes.priority_box.map((item,index)=>(
                    <Repeater.Item key={index} title = "Priority Details" deleteRequest = {()=>requestDelete(index)}>
                        <TextControl
                                className="w-full"
                                label="Title"
                                value={item.title}
                                onChange={ ( value ) => handleTitleChange(value,index,'title') }
                        />

                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Description"
                            value={item.description }
                            onChange={ ( value ) => handleTitleChange(value,index,'description')}
                        />

                        <ToggleControl
                            label="Show Button"
                            checked={ item.button.visible }
                            onChange={ () => {
                                    item.button = {
                                        ...item.button,
                                        visible: !item.button.visible
                                    }
                                   setAttributes(item)
                                }
                            }
                        />

                        { 
                            
                             item.button.visible && 
                            <div className="border border-solid border-gray-300 p-5 bg-gray-100 space-y-5">
                                <TextControl
                                    className="w-full"
                                    label="Button Label"
                                    value={item.button.text}  
                                    onChange={ text => {
                                        item.button.text = text
                                        const value = {...item.button.text, text }
                                        setAttributes({button: value})
                                    } 
                                    } 
                                    
                                 />

                                <TextControl
                                    className="w-full"
                                    label="Button URL"
                                    value={ item.button.url }
                                    onChange={ url => {
                                        item.button.url = url
                                        const value = { ...item.button.url, url }
                                        setAttributes({button: value})
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