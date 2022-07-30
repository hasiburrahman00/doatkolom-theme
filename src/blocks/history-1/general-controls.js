const { TextareaControl,TextControl} = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextareaControl
                className="w-full"
                label="Story"
                value={ attributes.person_history.description }
                onChange={ (description) => {
                    attributes.person_history.description = description
                    const value = {...attributes.person_history,description}
                    setAttributes({description: value})
                } 
            }
            />

            <TextControl
                className="w-full"
                label="Button Label"
                value={ attributes.person_history.see_more.text}
                onChange={ (text) => {
                    attributes.person_history.see_more.text = text
                    const value = {...attributes.person_history.see_more.text,text}
                    setAttributes({see_more: value})
                } 
            }
            />

            <TextControl
                className="w-full"
                label="Button URL"
                value={ attributes.person_history.see_more.url}
                onChange={ (url) => {
                    attributes.person_history.see_more.url = url
                    const value = {...attributes.person_history.see_more.url,url}
                    setAttributes({see_more: value})
                } 
            }
            />

            <ImagePicker
                label="Select Image"
                value={attributes.person_history.image}
                onChange={ (url) => {
                    attributes.person_history.image = url
                    const value = {...attributes.person_history,url}
                    setAttributes({image: value})
                } 
            }
            />
        </div>
    )
}