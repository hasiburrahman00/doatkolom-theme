const { Children, cloneElement } = wp.element;

export function BlockWrapper({ attributes, children, props }) {
    
    const childrenWithProps = Children.map( children, child => {
        return cloneElement( child, {
            blockId     : attributes.blockId,
            attributes  : attributes,
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
    const className = `doatkolom-block-wrap-${props.blockId}`
    return <div className={className}>{props.children}</div>
}

export function BlockWrapperEditor( props ) {
    return props.children
}