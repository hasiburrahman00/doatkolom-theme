const { TextControl, TextareaControl ,ToggleControl } = wp.components
const { Fragment } = wp.element

export default function GeneralControls({attributes, setAttributes}) {

    const handleTitleChange = (val,index,title)=>{
        attributes.card[index][title] = val;
        setAttributes({
            card: [
                ...attributes.card
            ]
        })
    }

    return (
        <div className="space-y-5">
            {attributes.card.map((item,index)=>(
               <div key={index} className ="border border-solid border-gray-300 p-5 bg-light_gray space-y-5">
                     <TextControl
                        className="w-full"
                        label="Title"
                        value={ item.title }
                        onChange={ ( value ) => handleTitleChange(value,index,'title')}
                    />   

                    <ToggleControl
                        label="First Number"
                        checked={ item.firstnumber.visible }
                        onChange={ () => {
                            item.firstnumber = {
                                ...item.firstnumber,
                                visible: !item.firstnumber.visible
                            }
                            setAttributes(item)
                        } }
                    />

                    { 
                            
                        item.firstnumber.visible && 
                        <div>
                            <TextControl
                                className="w-full"
                                label="Number"
                                value={ item.firstnumber.number }  
                                onChange={ number => {
                                    item.firstnumber.number = number
                                    const value = {...item.firstnumber.number, number }
                                    setAttributes({firstnumber: value})
                                } 
                                } 
                            />

                            <TextControl
                                className="w-full"
                                label="Text"
                                value={ item.firstnumber.text }
                                onChange={ text => {
                                    item.firstnumber.text = text
                                    const value = { ...item.firstnumber.text, text }
                                    setAttributes({firstnumber: value})
                                } 
                            }
                            />
                        </div>
                    }

                    <ToggleControl
                        label="Last Number"
                        checked={ item.lastnumber.visible }
                        onChange={ () => {
                            item.lastnumber = {
                                ...item.lastnumber,
                                visible: !item.lastnumber.visible
                            }
                            setAttributes(item)
                        } }
                    />

                    { 
                            
                        item.lastnumber.visible && 
                        <div>
                            <TextControl
                                className="w-full"
                                label="Number"
                                value={ item.lastnumber.number }  
                                onChange={ number => {
                                    item.lastnumber.number = number
                                    const value = {...item.lastnumber.number, number }
                                    setAttributes({lastnumber: value})
                                } 
                                } 
                            />
    
                            <TextControl
                                className="w-full"
                                label="Text"
                                value={ item.lastnumber.text }
                                onChange={ text => {
                                    item.lastnumber.text = text
                                    const value = { ...item.lastnumber.text, text }
                                    setAttributes({lastnumber: value})
                                } 
                                }
                            />
                        </div>       
                    }

                    <TextareaControl
                        className="w-full"
                        rows="6"
                        label="Description"
                        value={item.description }
                        onChange={ ( value ) => handleTitleChange(value,index,'description')}
                    />
               </div>     
            ))}
        </div>
    )
}