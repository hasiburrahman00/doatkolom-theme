export default function Style({attributes, wrapper, sheet}){
    return (
        <style id={sheet}>
            {`  
                ${wrapper} {
                    --primary-color: #6EC1E4;
                    --secondary-color: #54595f;
                    --hover-color: #3907bb;
                }

                ${wrapper} .alignment{
                    text-align: ${attributes.alignment}
                }

                ${wrapper} .header {
                    max-width: ${attributes.container_width}px;
                    margin: ${attributes.alignment == 'start'?'0':attributes.alignment == 'center'?'0 auto':attributes.alignment == 'end'&&'0 0 0 auto'};
                    margin-bottom: 20px;
                }

                ${wrapper} .para-width {
                    max-width: ${attributes.sub_title_width}px;
                    margin: ${attributes.alignment == 'start'?'0':attributes.alignment == 'center'?'0 auto':attributes.alignment == 'end'&&'0 0 0 auto'};
                }
            `}
        </style>
    )
}
