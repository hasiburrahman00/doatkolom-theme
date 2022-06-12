const { TextControl, TextareaControl, ToggleControl, RangeControl } = wp.components
import Aligment from '../../components/alignment'

export default function StyleControls({attributes, setAttributes}) {
    let handleAlignmentChancge = (position)=>{
        setAttributes({alignment: position})
    }

    return (
        <div className="space-y-5">
                <Aligment handleAlignmentChancge={handleAlignmentChancge} alignment={attributes.alignment}/>

            <RangeControl
                className="w-full"
                label="Header Width"
                value={ attributes.container_width }
                onChange={ ( value ) => setAttributes({container_width: value}) }
                min={ 320 }
                max={ 900 }
            />

            <RangeControl
                className="w-full"
                label="Sub Title Width"
                value={ attributes.sub_title_width }
                onChange={ ( value ) => setAttributes({sub_title_width: value}) }
                min={ 320 }
                max={ 900 }
            />


            

        </div>
    )
}