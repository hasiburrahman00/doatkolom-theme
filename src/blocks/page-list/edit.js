const { useEffect, useState } = wp.element;
const { useBlockProps, RichText, BlockControls, AlignmentToolbar } = wp.blockEditor
const { Button, Modal, TextControl, ToggleControl } = wp.components;

import ExternalLink from "../../Icons/external-link";
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

    const onListUpdate = ( value, type, index ) => {
        attributes.list[index][type] = value;
        setAttributes({
            list: [...attributes.list]
        })
    }

    const addNewList = () => {
        setAttributes({
            list: [
                ...attributes.list,
                {
                    text    : 'Page link',
                    href    : '#',
                }
            ]
        })
    }

    const removeList = index => {
        attributes.list.splice(index, 1);
        setAttributes({
            list: [...attributes.list]
        })
    }

	return (
		<BlockWrapper attributes={attributes} props={useBlockProps()}>
            
            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                {attributes.showTitle && <RichText
                    tagName="h2"
                    value={attributes.title}
                    placeholder='Heading...'
                    onChange={ val => onChangeHandler('title', val) }
                    {...( attributes.addTitleURL && {
                        className: 'page-list-title-url'
                    })}
                />}

                <ul>
                    {attributes.list.map( (item, index) => {
                        return (
                            <li key={index}>
                                <a> <ExternalLink/> {item.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </BlockWrapperContent>

            <BlockWrapperEditor>

                <BlockControls>
                    <AlignmentToolbar
                        value={attributes.alignment}
                        onChange={val => onChangeHandler('alignment', val)}
                    />

                    <Button onClick={ openModal } style={{margin: '5px 0 0 6px'}} className="is-primary">Edit Content</Button>
                </BlockControls>

                { isOpen && (
                    <Modal style={{width: '100%', maxWidth: '800px'}} title={attributes.title} onRequestClose={ closeModal }>
                        <ToggleControl
                            label={
                                attributes.showTitle
                                    ? 'Hide the title'
                                    : 'Show the title'
                            }
                            checked={ attributes.showTitle }
                            onChange={ () => {
                                onChangeHandler('showTitle', !attributes.showTitle)
                            } }
                        />

                        { attributes.showTitle &&
                            <div>
                                
                                <TextControl 
                                    label="List title"
                                    value={attributes.title}
                                    onChange={ val => onChangeHandler('title', val) }
                                />

                                <div style={{marginTop: '20px'}}>
                                    <ToggleControl
                                        label={
                                            attributes.addTitleURL
                                                ? 'Remove Title URL'
                                                : 'Add Title URL'
                                        }
                                        checked={ attributes.addTitleURL }
                                        onChange={ () => {
                                            onChangeHandler('addTitleURL', !attributes.addTitleURL)
                                        } }
                                    />

                                    { attributes.addTitleURL && <TextControl 
                                        label="Title URL"
                                        value={attributes.titleURL}
                                        onChange={ val => onChangeHandler('titleURL', val) }
                                    /> }
                                </div>
                            </div>
                        }

                        <div>
                            <ul>
                                {attributes.list.map((item, index) => 
                                    <li key={index} style={{backgroundColor: '#eee', padding: '10px', marginBottom: '3px'}}>
                                        <div style={{display:'grid', alignItems: 'center', columnGap: '15px', gridTemplateColumns: '1fr 1fr 80px'}}>
                                            <TextControl 
                                                label="Text"
                                                value={item.text}
                                                onChange={ val => onListUpdate(val, 'text', index)}
                                            />
                                            <TextControl 
                                                label="URL"
                                                value={item.href}
                                                onChange={ val => onListUpdate(val, 'href', index) }
                                            />
                                            <Button onClick={() => removeList(index)} className="is-secondary" style={{marginTop: '14px', padding: '18px'}}>Remove</Button>
                                        </div>
                                        
                                    </li>
                                )}
                            </ul>
                            
                            <Button className="is-primary" onClick={addNewList}>Add New URL</Button>

                        </div>

                    </Modal>
                ) }
            </BlockWrapperEditor>

        </BlockWrapper>
	);
}