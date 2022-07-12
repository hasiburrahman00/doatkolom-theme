// wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
// wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType();

export default class RegisterBlock {

    constructor( config ) {  
        this.name   = config.name
        this.config = config;
    }

    setup({edit, save, controls, style}) {

        const self = this;
        const EditComponent  = edit || <p>Edit component not found</p>
        const SaveComponent  = save || <p>Save component not found</p>
        const StyleComponent = style || false;
        const BlockWrapper   = self.BlockWrapper;

        self.EditComponent = EditComponent;
        self.SaveComponent = SaveComponent;
        self.StyleComponent= StyleComponent;
        self.controls      = controls || [];

        const blockSettings= Object.assign(self.config, {
            // apiVersion  : 2,
            category    : 'widgets',
            icon        : 'tide',
            textdomain  : 'doatkolom',
            editorScript: "file:build/gutenberg.min.js",
            getEditWrapperProps() {
                return {
                    'data-align': 'full'
                };
            },
            attributes  : {
                ...self.config.attributes,
                _doatkolom_block_name: {
                    type    : 'string',
                    default : self.name
                },

                _doatkolom_block_id: {
                    type    : 'string'
                }
            },

            edit: self.editorDecorator.bind(self),
            save: function({attributes}) {
                return (
                    <BlockWrapper attributes={attributes} self={self}>
                        <SaveComponent attributes={attributes}/>
                    </BlockWrapper>
                )
            }
        })

        wp.blocks.registerBlockType(self.name, blockSettings)
    }

    BlockWrapperEditor(props) {

        const { Button, Modal, TabPanel, ToolbarButton, ToolbarGroup } = wp.components;
        const { BlockControls} = wp.blockEditor;
        const { Fragment } = wp.element;
        const [ modalVisible, setModalVisible ] = wp.element.useState(false);
        const header = props.self.controls.map( item => {
            return {
                ...item,
                name: item.component.name
            }
        } )

        return(
            <Fragment>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton onClick={() => setModalVisible(true)}> <span className="dashicons dashicons-admin-generic mr-2"></span> Edit Section</ToolbarButton>
                    </ToolbarGroup>
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
                            {tab => <tab.component attributes={props.attributes} setAttributes={props.setAttributes}/>}
                        </TabPanel>
                    </Modal>
                }
            </Fragment>
        )
    }

    BlockWrapper({attributes, children, self}) {

        const stateKeys = Object.keys(attributes);
        const settings  =  stateKeys.reduce((total, current) => {
            return {
                ...total,
                ...( (current && Reflect.has(self.config.attributes, current) && self.config.attributes[current].frontend) && {
                    [current] : attributes[current]
                } )
            }
        }, '');

        const StyleComponent = self.StyleComponent;
        return (
            <div>
                { StyleComponent && 
                    <style id={`doatkolom-stylesheet-${attributes._doatkolom_block_id}`}>
                        <StyleComponent
                            wrapper={`#doatkolom-block-${attributes._doatkolom_block_id}`}
                            attributes={attributes}
                        />
                    </style>
                }
                <div 
                    id={`doatkolom-block-${attributes._doatkolom_block_id}`}
                    className="doatkolom-block-wrap"
                    data-type={self.name}
                    data-settings={JSON.stringify(settings)}
                >
                    {children}
                </div>
            </div>
        )
    }

    // get block client id/unique id 
    editorDecorator({ attributes, setAttributes, clientId }){
        
        const self = this;
        const BlockWrapper  = self.BlockWrapper;
        const EditComponent = self.EditComponent;
        const BlockWrapperEditor = self.BlockWrapperEditor;

        wp.element.useEffect( () => {
            if ( ! attributes._doatkolom_block_id ) {
                setAttributes( { _doatkolom_block_id: clientId } );
            }

            const device = wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType();
            if( device === 'Desktop' ) {
                const $scope = jQuery(`#block-${clientId}`).find('.doatkolom-block-wrap').first();
                jQuery(window).trigger(self.name, [$scope]);
            } else {
                const frame = jQuery('iframe[name="editor-canvas"]').contents();
                const $scope = frame.find(`#block-${clientId}`).find('.doatkolom-block-wrap').first();
                jQuery(window).trigger(self.name, [$scope]);
            }

        }, [] );

        return (
            <>
                <BlockWrapper attributes={attributes} self={self}>
                    <EditComponent attributes={attributes} setAttributes={setAttributes}/>
                </BlockWrapper>
                <BlockWrapperEditor attributes={attributes} setAttributes={setAttributes} self={self}/>
            </>
        )
    }

}
