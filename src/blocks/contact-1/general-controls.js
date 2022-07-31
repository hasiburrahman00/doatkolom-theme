const { TextControl} = wp.components
import Repeater from '../../components/repeater'
import ImagePicker from "../../components/image-picker"

export default function GeneralControls({attributes,setAttributes}) {

    const addNewRequest = ()=>{
        setAttributes({Key_contacts: [
            ...attributes.Key_contacts,
                {
                    image:  doatkolom_object.blocks + 'contact-1/img/contact-image1.webp',
                    name: "Zahirul Islam",
                    phone: "+880 1234-56789",
                    email: "johirul@uposhonghar.com"
                }
        ]})
    }
    
    const requestDelete = (index)=>{
        attributes.Key_contacts.splice(index,1)
         setAttributes({Key_contacts : [
             ...attributes.Key_contacts
         ]})
     }
    
    const handleTitleChange = (val,index,type)=>{
         attributes.Key_contacts[index][type] = val
         setAttributes({
            Key_contacts: [
                 ...attributes.Key_contacts
             ]
         })
    }


    return (
        <div className="space-y-5">   
            <Repeater label = "Number Box" addNewRequest ={addNewRequest}>
                {attributes.Key_contacts.map((item,index)=>(
                    <Repeater.Item key={index} title="teachers details" deleteRequest={()=>requestDelete(index)}>
                        <ImagePicker
                            label="Select Image"
                            value={item.image}
                            onChange={ ( url ) => changeHandler(url,index,'image') }
                        />

                        <TextControl
                            className="w-full"
                            label="Number"
                            value={item.name}
                            onChange={ ( value ) => handleTitleChange(value,index,'name') }
                        />

                        <TextControl
                            className="w-full"
                            label="Phone"
                            value={item.phone}
                            onChange={ ( value ) => handleTitleChange(value,index,'phone')}
                        />

                        <TextControl
                            className="w-full"
                            label="Email"
                            value={item.email}
                            onChange={ ( value ) => handleTitleChange(value,index,'email')}
                        />
                    </Repeater.Item>
                ))}
            </Repeater>
        </div>
    )
}