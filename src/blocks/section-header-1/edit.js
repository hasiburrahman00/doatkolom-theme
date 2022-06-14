import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";
import GeneralControls from "./general-controls";
import StyleControls from "./style-controls";
const { useEffect } = wp.element;
const { useBlockProps } = wp.blockEditor


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

        if ( ! attributes.block_id ) {
            setAttributes( { block_id: clientId } );
        }

        if ( ! attributes.block_name ) {
            setAttributes( { block_name: name } );
        }

        const $scope = jQuery(`#block-${clientId}`).find(`.doatkolom-block-wrap`).first();
        jQuery(window).trigger( name, [ $scope ] );

    }, [] );


   


	return (
		<BlockWrapper attributes={attributes} setAttributes={setAttributes} props={useBlockProps()}>
            
            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div className="alignment max-w-screen-xl mx-auto">
                    <h3 className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary mb-3 header">{attributes.title}</h3>
                    <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.sub_title}</p>
                </div>
            </BlockWrapperContent>

            <BlockWrapperEditor>
                <GeneralControls label="General"/>
                <StyleControls label="Style"/>
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}