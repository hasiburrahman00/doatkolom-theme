const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({post_card: [
            ...attributes.post_card,
            {
                image: doatkolom_object.blocks + 'post-card-1/img/teacher1.webp',
                names: "Mohammad Rafiquzzaman",
                position: "Public Administration, University of Dhaka",
                description: "The school was established on April 19, 1959 on a small scale by the initiative of some personalities. The school was established on 19 April 1959 on a small scale by the initiative of some personalities",
                post_btn: {
                    text: "Read More",
                    url: "#",
                    visible: true
                }
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.post_card.splice(index,1)
         setAttributes({post_card : [
             ...attributes.post_card
         ]})
     }
 
    const handleChange = (val,index,type)=>{
         attributes.post_card[index][type] = val
         setAttributes({
            post_card: [
                 ...attributes.post_card
             ]
         })
    }
 

    return (
        <div className="space-y-5">
            <Repeater label = "Post Card" addNewRequest ={addNewRequest}>
                {attributes.post_card.map((item,index)=>(
                    <Repeater.Item key={index} title = {item.names} deleteRequest = {()=>requestDelete(index)}>

                        <ImagePicker
                            label="Select Image"
                            value={item.image}
                            onChange={ ( url ) => handleChange(url,index,'image') }
                        />
                        <TextControl
                                className="w-full"
                                label="Names"
                                value={item.names}
                                onChange={ ( value ) => handleChange(value,index,'names') }
                        />

                        <TextControl
                                className="w-full"
                                label="Position"
                                value={item.position}
                                onChange={ ( value ) => handleChange(value,index,'position') }
                        />

                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Description"
                            value={item.description }
                            onChange={ ( value ) => handleChange(value,index,'description')}
                        />

                        <ToggleControl
                            label="Show Button"
                            checked={ item.post_btn.visible }
                            onChange={ () => {
                                    item.post_btn = {
                                        ...item.post_btn,
                                        visible: !item.post_btn.visible
                                    }
                                   setAttributes(item)
                                }
                            }
                        />

                        { 
                            
                            item.post_btn.visible && 
                            <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                                <TextControl
                                    className="w-full"
                                    label="Button Label"
                                    value={item.post_btn.text}  
                                    onChange={ text => {
                                        item.post_btn.text = text
                                        const value = {...item.post_btn.text, text }
                                        setAttributes({button: value})
                                    } 
                                    } 
                                 />

                                <TextControl
                                    className="w-full"
                                    label="Button URL"
                                    value={ item.post_btn.url }
                                    onChange={ url => {
                                        item.post_btn.url = url
                                        const value = { ...item.post_btn.url, url }
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