const { useEffect, useState } = wp.element;
const { useBlockProps , BlockControls,AlignmentToolbar} = wp.blockEditor
const { Button,Modal,ToggleControl,TextControl,RangeControl  } = wp.components;
import Style from "./style";
import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const [ isOpen, setOpen ] = useState( false );
    const openModal = ()=> setOpen( true );
    const closeModal = () => setOpen( false );
    /**
     * 
     * 
     * @hook useEffect
     * all the code inside of this hook are responsive for updating gutenberg third-party script, block name change and block id change
     * 
     * @since 1.0.0
     * @author ashraf
     * 
     */ 
    useEffect( () => {

        if ( ! attributes.blockId ) {
            setAttributes( { blockId: clientId } );
        }

        if ( ! attributes.blockName ) {
            setAttributes( { blockName: name } );
        }

        const $scope = jQuery(`#block-${clientId}`).find(`.doatkolom-block-wrap`).first();
        jQuery(window).trigger( name, [ $scope ] );

    }, [] );

    const onChangeHandler = (name, value) => {
        setAttributes({[name]: value})
    }



	return (
		<BlockWrapper attributes={attributes} props={useBlockProps()}>
            
            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div className="text-center">
                    {attributes.show_heading && <h1 className="font-primary text-primary text-5xl font-normal">{attributes.heading}</h1>}
                    {attributes.show_heading_details && <p className="font-secondary text-lg para-width text-primary">{attributes.heading_details}</p>}
                    
                    
                </div>
            </BlockWrapperContent>

            <BlockWrapperEditor>

                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.alignment}
                        onChange={val => onChangeHandler('alignment', val)}
                    />

                    <Button onClick={ openModal }  style={{margin: '5px 0 0 6px'}} className="is-primary">Edit Content</Button>
                </BlockControls>
                { isOpen && (
                    <Modal style={{width: '100%', maxWidth: '800px'}} title={attributes.title} onRequestClose={ closeModal }>
                      <ToggleControl
                            label={
                                attributes.show_heading
                                    ? 'Hide the heading'
                                    : 'Show the heading'
                            }
                            checked={ attributes.show_heading }
                            onChange={ () => {
                                onChangeHandler('show_heading', !attributes.show_heading)
                            } }
                        />
                      <ToggleControl
                            label={
                                attributes.show_heading_details
                                    ? 'Hide the heading details'
                                    : 'Show the heading details'
                            }
                            checked={ attributes.show_heading_details }
                            onChange={ () => {
                                onChangeHandler('show_heading_details', !attributes.show_heading_details)
                            } }
                        />

                        <h3>Heading</h3>

                        <TextControl
                            value={ attributes.heading }
                            onChange={ (val) => {
                                onChangeHandler('heading', val)
                            } }
                        />

                        <h3>Heading Details</h3>

                        <TextControl
                            label="Details"
                            value={ attributes.heading_details }
                            onChange={ (val) => {
                                onChangeHandler('heading_details', val)
                            } }
                        />
                        <RangeControl
                            label="Width"
                            value={ attributes.heading_details_width }
                            initialPosition={ attributes.heading_details_width }
                            onChange={ (val) => {
                                onChangeHandler('heading_details_width', val)
                            } }
                            min={ 320 }
                            max={ 1320 }
                        />

                    </Modal>
                ) }


            </BlockWrapperEditor>

        </BlockWrapper>
	);
}