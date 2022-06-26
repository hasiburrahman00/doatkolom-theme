export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} .slider-dots .slick-dots {
                    padding-left: 0px;
                    list-style-type: none;
                }
                
            `}

        </style>
    )
}
