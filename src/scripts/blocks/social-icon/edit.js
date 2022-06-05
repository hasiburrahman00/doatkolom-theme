const { useEffect, useState } = wp.element;
const { useBlockProps, BlockControls, AlignmentToolbar } = wp.blockEditor
const { Button, Modal, TextControl, ToggleControl} = wp.components;

import Icons from './../Icons';
import { BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle } from "../block-wrapper";
import Style from './style';

export default function Edit({ attributes, setAttributes, clientId }) {
	
	const [ isOpen, setOpen ] = useState( false );
    const openModal = ()=> setOpen( true );
    const closeModal = () => setOpen( false );

	useEffect( () => {
        if ( ! attributes.blockId ) {
            setAttributes( { blockId: clientId } );
        }
    }, [] );

	const onChangeHandler = (name, value) => {
        setAttributes({[name]: value})
    }
    
	const SocialIcon = Icons[attributes.icon];

	return (
		<BlockWrapper attributes={attributes} props={useBlockProps()}>
			
			<BlockWrapperStyle>
				<Style/>
			</BlockWrapperStyle>

			<BlockWrapperContent>
				<a className="icon">
					<SocialIcon/>
				</a>
				{ attributes.showDescription && 
					<p> Still have questions? Ping us at our <a>{attributes.linkText}</a>, and we'd love to help out!</p>
				}
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
                    <Modal style={{width: '100%', maxWidth: '800px'}} title="Premio Social Icon" onRequestClose={ closeModal }>
                        <ToggleControl
                            label={
                                attributes.showDescription
                                    ? 'Hide the description'
                                    : 'Show the description'
                            }
                            checked={ attributes.showDescription }
                            onChange={ () => {
                                onChangeHandler('showDescription', !attributes.showDescription)
                            } }
                        />

                        { attributes.showDescription &&
                            <div>
                                <TextControl 
                                    label="Link Text"
                                    value={attributes.linkText}
                                    onChange={ val => onChangeHandler('linkText', val) }
                                />

                                <TextControl 
									label="Link URL"
									value={attributes.linkURL}
									onChange={ val => onChangeHandler('linkURL', val) }
                                />
                            </div>
                        }

						<div className="edit-icons">
							{Object.keys(Icons).map( key => {
								const Sicon = Icons[key];
								return (
									<div id={key} style={{border: `1px solid ${key === attributes.icon ? '#521dd9' : '#ddd'}`}} onClick={() => onChangeHandler('icon', key)} key={key}>
										<span style={{width: '30px', display: 'inline-block'}}>
											<Sicon/>
										</span>
									</div>
								)
							})}
						</div>

                    </Modal>
                ) }
			</BlockWrapperEditor>

        </BlockWrapper>
	);
}