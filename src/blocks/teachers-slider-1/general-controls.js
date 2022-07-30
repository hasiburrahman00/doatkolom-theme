const { TextControl, TextareaControl } = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function BoxControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({teachers: [
            ...attributes.teachers,
            {
                image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers1.webp',
                speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                name: "Mohammad Ashikuzzaman",
                position: "Departmental Head Teacher, Savar Girls High School",
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.teachers.splice(index,1);
        setAttributes({teachers: [...attributes.teachers] })
    }

    const handleChange = (val,index,type)=>{
        attributes.teachers[index][type] = val
        setAttributes({
            teachers: [
                 ...attributes.teachers
            ]
        })
    }
 

    return (
        <div className="space-y-5">
            <Repeater label = "Teachers Slider" addNewRequest ={addNewRequest}>
                {attributes.teachers?.map((item,index)=>(
                    <Repeater.Item key={index} title = {item.name} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Image"
                            value={item.image}
                            onChange={ ( url ) => handleChange(url,index,'image') }
                        />

                        <TextControl
                            className="w-full"
                            label="Name"
                            value={item.name}
                            onChange={ ( value ) => handleChange(value,index,'name') }
                        />
                        
                        <TextControl
                            className="w-full"
                            label="Designation"
                            value={item.position}
                            onChange={ ( value ) => handleChange(value,index,'position') }
                        />

                        <TextareaControl
                            className="w-full"
                            rows="6"
                            label="Speech"
                            value={item.speach }
                            onChange={ ( value ) => handleChange(value,index,'speach')}
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}