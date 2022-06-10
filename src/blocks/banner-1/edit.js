const { useEffect, useState } = wp.element;
const { useBlockProps , BlockControls } = wp.blockEditor

import Style from "./style";
import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";

export default function Edit({ attributes, setAttributes, clientId, name }) {
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



	return (
		<BlockWrapper attributes={attributes} props={useBlockProps()}>
            
            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div className="banner-wrapper bg-cover bg-no-repeat">
                    <div className="bg-gradient-to-b from-primary/80 via-primary/60 to-white py-28 px-5">
                        <div className="max-w-screen-xl mx-auto">
                            <h1 className="font-primary text-white mt-0 mb-6 text-center font-normal text-6xl">{attributes.institution_name}</h1>
                            <p className="max-w-3xl text-white text-center font-secondary text-lg mx-auto m-0 leading-7">{attributes.description}</p>

                            <div className="flex items-center justify-center space-x-8 mt-8">
                                <a className="bg-primary font-secondary text-lg rounded-full py-4 px-9 text-white no-underline hover:text-primary hover:bg-white" href="#">Know More About Us</a>
                                <a className="bg-white font-secondary text-lg rounded-full py-4 px-9 text-primary no-underline hover:text-white hover:bg-primary" href="#">Latest Update</a>
                            </div>

                            <div className="flex items-baseline justify-between mt-16">
                                <div className="w-1/2">
                                    <h2 className="font-primary text-primary text-3xl">{attributes.history_title}</h2>
                                    <p>
                                        {attributes.history_description}
                                        {attributes.show_history_readmore_button && <a className="inline-block text-secondary ml-1 no-underline hover:underline" href="#">Read More</a>}
                                        
                                    </p>
                                </div>

                                <div>
                                    <div>Icon</div>
                                    <div>
                                        <h2>Notice Board</h2>
                                        <p>Admission, Events, Exam, Etc.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </BlockWrapperContent>

            <BlockWrapperEditor>
                <BlockControls>
                    <button>shawon islam</button>
                </BlockControls>
            </BlockWrapperEditor>

        </BlockWrapper>
	);
}