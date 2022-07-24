export default function Style({attributes, wrapper}){
    return (
        `  
            ${wrapper} .alignment{
                text-align: ${attributes.alignment}
            }

            ${wrapper} .header {
                max-width: ${attributes.container_width}px;
                margin: ${attributes.alignment == 'left'?'0':attributes.alignment == 'center'?'0 auto':attributes.alignment == 'right'&&'0 0 0 auto'};
                margin-bottom: 20px;
            }

            ${wrapper} .para-width {
                max-width: ${attributes.description_width}px;
                margin: ${attributes.alignment == 'left'?'0':attributes.alignment == 'center'?'0 auto':attributes.alignment == 'right'&&'0 0 0 auto'};
            }

            ${wrapper} .doatkolom-highlight {
                color: ${attributes.highlight_color}
            }
        `
    )
}
