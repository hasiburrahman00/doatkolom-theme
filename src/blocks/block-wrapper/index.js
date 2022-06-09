const { Children, cloneElement } = wp.element;
export function BlockWrapper({ attributes, children, props }) {   
    
    const childrenWithProps = Children.map( children, child => {
        return cloneElement( child, {
            blockId     : attributes.blockId,
            attributes  : attributes,
            type        : attributes.blockName || '',
        })
    })

    return <div {...props}> {childrenWithProps} </div>
}

export function BlockWrapperStyle( props ) {
    const sheet = `doatkolom-stylesheet-${props.blockId}`;
    const block = `.doatkolom-block-wrap-${props.blockId}`

    return Children.map( props.children, child => {
        return cloneElement( child, {
            wrapper     : block,
            sheet       : sheet,
            attributes  : props.attributes
        })
    })
}

export function BlockWrapperContent( props ) {
    const className = `doatkolom-block-wrap-${props.blockId} doatkolom-block-wrap`
    return <div className={className} data-type={props.type}>{props.children}</div>
}

export function BlockWrapperEditor( props ) {
    return props.children
}
