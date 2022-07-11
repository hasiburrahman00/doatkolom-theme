const { TextControl, TextareaControl } = wp.components
import ImagePicker from "../../components/image-picker"
import Repeater from '../../components/repeater'

export default function GeneralControls({attributes, setAttributes}) {
    
    const addNewRequest = ()=>{
        setAttributes({content: [
            ...attributes.content,
            {
                title: "Library",
                description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                img: doatkolom_object.blocks + 'timeline-tab-1/img/timeline-tab-1.webp'
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.content.splice(index,1)
         setAttributes({content : [
             ...attributes.content
         ]})
     }
 
    const handleTitleChange = (val,index,type)=>{
         attributes.content[index][type] = val
         setAttributes({
            content: [
                 ...attributes.content
             ]
         })
    }

    return (
        <div className="space-y-5">

            <TextControl
                className="w-full"
                label="Heading"
                value={ attributes.heading }
                onChange={ heading => setAttributes({heading}) }
            />

            <Repeater label="Feature List" addNewRequest ={addNewRequest}>
                {attributes.content.map((item,index)=>(
                    <Repeater.Item key={index} title={item.title} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Image"
                            value={item.img}
                            onChange={ ( value ) => handleTitleChange(value,index,'img') }
                        />
                        <TextControl
                            className="w-full"
                            label="Title"
                            value={item.title}
                            onChange={ ( value ) => handleTitleChange(value,index,'title') }
                        />
                        <TextareaControl
                            className="w-full"
                            label="Description"
                            value={ item.description }
                            onChange={ ( value ) => handleTitleChange(value,index,'description') }
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}