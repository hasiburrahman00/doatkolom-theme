export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                
                ${wrapper} .banner-wrapper {
                    background-image: url(${attributes.background});
                }

                ${wrapper} .header {
                    max-width: ${attributes.header_width}px;
                    margin: 0 auto;
                }
                
            `}

        </style>
    )
}
