const { RangeControl, ColorPicker } = wp.components
import Aligment from '../../components/alignment'

export default function StyleControls({attributes, setAttributes}) {
    
    return (
        <div className="space-y-5">

            <Aligment 
                label="Alignment"
                onChange={ alignment => setAttributes({alignment}) } 
                value={attributes.alignment}
            />

            <RangeControl
                className="w-full"
                label="Header Width"
                value={ attributes.container_width }
                onChange={ container_width => setAttributes({container_width}) }
                min={ 320 }
                max={ 900 }
            />

            <RangeControl
                className="w-full"
                label="Sub Title Width"
                value={ attributes.description_width }
                onChange={ description_width => setAttributes({description_width}) }
                min={ 320 }
                max={ 900 }
            />

            <div>
                <label className="block mb-2">Highlight Color</label>
                <ColorPicker
                    color={attributes.highlight_color}
                    onChange={ highlight_color => setAttributes({highlight_color})}
                />
            </div>
            
        </div>
    )
}