const { TextControl,RangeControl } = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({subjects: [
            ...attributes.subjects,
            {
                image: doatkolom_object.blocks + 'subject-1/img/subject1.webp',
                subject: "Chemistry 1st Paper"
            }
        ]})
    }

    const requestDelete = (index)=>{
        attributes.subjects.splice(index,1)
         setAttributes({subjects : [
             ...attributes.subjects
         ]})
     }

    const handeImageUpload = (val,index,image)=>{
        attributes.subjects[index][image] = val
        setAttributes({
            subjects:[
                ...attributes.subjects
            ]
        })
    }
 
    const handleTitleChange = (val,index,type)=>{
         attributes.subjects[index][type] = val
         setAttributes({
            subjects: [
                 ...attributes.subjects
             ]
         })
    }

    return (
        <div className="space-y-5">
            <Repeater label = "Subject Box" addNewRequest ={addNewRequest}>
                {attributes.subjects.map((item,index)=>(
                    <Repeater.Item key={index} title = {item.subject} deleteRequest = {()=>requestDelete(index)}>
                        <ImagePicker
                            label="Select Image"
                            value={item.image}
                            onChange={ ( url ) => handeImageUpload(url,index,'image') }
                        />

                        <TextControl
                                className="w-full"
                                label="Subject"
                                value={item.subject}
                                onChange={ ( value ) => handleTitleChange(value,index,'subject') }
                        />

                        <RangeControl
                            label="Box width"
                            value={ item.box_span}
                            onChange={ ( value ) => handleTitleChange(value,index,'box_span') }
                            min={ 1 }
                            max={ 5 }
                        />
                    </Repeater.Item>
                ))}
            </Repeater> 
        </div>
    )
}