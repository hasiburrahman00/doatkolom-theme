const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function AchivementControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({story_box: [
            ...attributes.story_box,
            {
                description: "Creative IT is at your side to keep yourself updated with modern technology.....",
                see_more: {
                    text: "Learn more",
                    url: "#",
                    visible: true
                }
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.story_box.splice(index,1)
         setAttributes({story_box : [
             ...attributes.story_box
         ]})
     }
 
    const handleChange = (val,index,type)=>{
         attributes.story_box[index][type] = val
         setAttributes({
            story_box: [
                 ...attributes.story_box
             ]
         })
    }
 

    return (
        <div className="space-y-5">

            <Repeater label = "Story Box" addNewRequest ={addNewRequest}>
                {attributes.story_box.map((item,index)=>(
                    <Repeater.Item key={index} title = "All Story" deleteRequest = {()=>requestDelete(index)}>
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