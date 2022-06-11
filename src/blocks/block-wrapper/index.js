const { Children, cloneElement, useState, Fragment } = wp.element;
const { Button, Modal, TabPanel } = wp.components;
const { BlockControls } = wp.blockEditor

export function BlockWrapper({ attributes, setAttributes, children, props }) {   
    
    const childrenWithProps = Children.map( children, child => {
        return cloneElement( child, {
            block_id        : attributes.block_id,
            attributes      : attributes,
            setAttributes   : setAttributes,
            type            : attributes.block_name || '',
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
    
    const [ modalVisible, setModalVisible ] = useState(false)
    const header = []
    const Components = {};

    Children.map( props.children, child => {
        
        header.push({
            name        : child.type.name,
            title       : child.props.label || 'Uncategorized',
            className   : 'w-full'
        })

        Components[child.type.name] = cloneElement( child, {
            setAttributes   : props.setAttributes,
            attributes      : props.attributes
        })
    })

    return (
        <Fragment>
            <BlockControls>
                <Button onClick={() => setModalVisible(true)} className="is-primary ml-2 mt-1.5"> <span className="dashicons dashicons-admin-generic mr-2"></span> Edit Section</Button>
            </BlockControls>
            {
                modalVisible &&
                <Modal style={{width: '100%', maxWidth: '900px', minHeight: '600px'}} title="Section Preferences" shouldCloseOnClickOutside={false} onRequestClose={ () => setModalVisible(false) }>
                    <TabPanel
                        className="flex doatkolom-editor-tab"
                        activeClass="is-active"
                        orientation="vertical"
                        tabs={ header }
                    >
                        { tab => Components[tab.name] }
                    </TabPanel>
                </Modal>
            }
        </Fragment>
    )
}
