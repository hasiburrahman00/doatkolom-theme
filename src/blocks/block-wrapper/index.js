const { Children, cloneElement } = wp.element;
export function BlockWrapper({ attributes, children, props }) {   
    
    const childrenWithProps = Children.map( children, child => {
        return cloneElement( child, {
            block_id     : attributes.block_id,
            attributes  : attributes,
            type        : attributes.block_name || '',
        })
    })

    return <div {...props}> {childrenWithProps} </div>
}

export function BlockWrapperStyle( props ) {
    const sheet = `doatkolom-stylesheet-${props.block_id}`;
    const block = `.doatkolom-block-wrap-${props.block_id}`

    return Children.map( props.children, child => {
        return cloneElement( child, {
            wrapper     : block,
            sheet       : sheet,
            attributes  : props.attributes
        })
    })
}

export function BlockWrapperContent( props ) {
    const className = `doatkolom-block-wrap-${props.block_id} doatkolom-block-wrap`
    return <div className={className} data-type={props.type}>{props.children}</div>
}

export function BlockWrapperEditor( props ) {
    return props.children
}
