const { TextControl, TextareaControl, ToggleControl } = wp.components
import Repeater from '../../components/repeater'

export default function DescriptionControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({paragraphs: [
            ...attributes.paragraphs,
            {
                title: "Our School",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
        ]})
    }

    const requestDelete = (index)=>{
       attributes.paragraphs.splice(index,1)
        setAttributes({paragraphs : [
            ...attributes.paragraphs
        ]})
    }

    const handleTitleChange = (val,index,type)=>{
        attributes.paragraphs[index][type] = val
        setAttributes({
            paragraphs: [
                ...attributes.paragraphs
            ]
        })
    }

    return (
        <div className="space-y-5">
            
            <Repeater label = "Paragraphs" addNewRequest ={addNewRequest}>
                {attributes.paragraphs.map((item,index)=>(
                    <Repeater.Item key={index} title = "About Title" deleteRequest = {()=>requestDelete(index)}>
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

                    </Repeater.Item>
                ))}
            </Repeater>    

        </div>
    )
}