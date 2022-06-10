export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                }

                ${wrapper} .para-width {
                    width: ${attributes.heading_details_width}px;
                    margin: 0 auto;
                }
            `}
        </style>
    )
}
