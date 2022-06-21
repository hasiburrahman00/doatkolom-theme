import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";


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
                    <div className="max-w-screen-xl lg:px-0 px-5 mx-auto">

                        <div className="wrapper-main">
                            <div className="item w-20 h-20 bg-red-500"></div>
                            <div className="item w-20 h-20 bg-black"></div>
                            <div className="item w-20 h-20 bg-gray-800"></div>
                        </div>
                    </div>
            </BlockWrapperContent>
{/* 
            <BlockWrapperEditor>
                <GeneralControls label="General"/>
                <BoxControls label = "Details"/>
            </BlockWrapperEditor> */}
        </BlockWrapper>
	);
}