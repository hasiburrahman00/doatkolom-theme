export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                
                ${wrapper} .banner-wrapper {
                    background-image: url(${attributes.background});
                }

                ${wrapper} .sub-header {
                    width: ${attributes.sub_heading_width}px;
                    margin: 0 auto;
                }
                
            `}

        </style>
    )
}
