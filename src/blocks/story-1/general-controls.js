const { TextareaControl,TextControl,ToggleControl} = wp.components
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes, setAttributes}) {
    return (
        <div className="space-y-5">
            <TextareaControl
                className="w-full"
                label="Story"
                value={ attributes.person_story.description }
                onChange={ (description) => {
                    attributes.person_story.description = description
                    const value = {...attributes.person_story,description}
                    setAttributes({description: value})
                } 
            }
            />

            <ToggleControl
                label="Show Button"
                checked={ attributes.person_story.see_more.visible }
                onChange={ () => {
                    attributes.person_story.see_more = {
                            ...attributes.person_story.see_more,
                            visible:!attributes.person_story.see_more.visible
                        }
                       setAttributes(attributes.person_story)
                    }
                }            
            />

            { 
                attributes.person_story.see_more.visible && 
                <div className="border border-solid border-gray p-5 bg-light_gray space-y-5">
                    <TextControl
                        className="w-full"
                        label="Button Label"
                        value={attributes.person_story.see_more.text}  
                        onChange={ text => {
                            attributes.person_story.see_more.text = text
                            const value = {...attributes.person_story.see_more,text }
                            setAttributes({see_more: value})
                        } 
                        } 
                    />

                    <TextControl
                        className="w-full"
                        label="Button URL"
                        value={ attributes.person_story.see_more.url }
                        onChange={ url => {
                            attributes.person_story.see_more.url = url
                            const value = { ...attributes.person_story.see_more, url }
                            setAttributes({see_more: value})
                        } 
                    }
                    />
                </div>                            
            }
            <ImagePicker
                label="Select Image"
                value={attributes.person_story.image}
                onChange={ (url) => {
                    attributes.person_story.image = url
                    const value = {...attributes.person_story,url}
                    setAttributes({image: value})
                } 
            }
            />
        </div>
    )
}