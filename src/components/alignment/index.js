const { forwardRef, useState } = wp.element;

function Alignment( props, ref ) {

    const {handleAlignmentChancge,alignment} = props
    const [position,setPosition] = useState(alignment)


    let handleChange = (position)=>{
        setPosition(position)
        handleAlignmentChancge(position)
    }
    

    return (
        <div ref={ref}>
            <div>
                <button onClick={()=>handleChange('start')} className={position=='start'?'py-1.5 px-3 border-0 bg-indigo-600 text-white':'py-1.5 px-3 border-0 cursor-pointer'}><span className="dashicons dashicons-editor-alignleft"></span></button>
                <button onClick={()=>handleChange('center')} className={position=='center'?'py-1.5 px-3 border-0 bg-indigo-600 text-white':'py-1.5 px-3 border-0 cursor-pointer'}><span className="dashicons dashicons-editor-aligncenter"></span></button>
                <button onClick={()=>handleChange('end')} className={position=='end'?'py-1.5 px-3 border-0 bg-indigo-600 text-white':'py-1.5 px-3 border-0 cursor-pointer'}><span className="dashicons dashicons-editor-alignright"></span></button>
            </div>
        </div>
    )
}

export default forwardRef( Alignment )