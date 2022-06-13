import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";
import GeneralControls from "./general-controls";
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
                <div className="max-w-screen-xl mx-auto md:w-full sm:w-full">
                    <div className="md:flex  justify-between sm:w-full lg:w-full">
                            <div className="md:w-1/4 sm:w-full  md:mr-5 ">
                                <img src={attributes.image_one}/>
                            </div>               
                            <div className="md:w-3/4 sm:w-full mt-5 md:mt-0">
                                <img src={attributes.image_two}/>
                            </div>                            
                    </div>
                    <div className="md:flex  justify-between sm:w-full lg:w-full md:mt-5">
                            <div className="md:w-3/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                                <img src={attributes.image_three}/>
                            </div>               
                            <div className="md:w-1/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                                <img src={attributes.image_four}/>
                            </div>                            
                            <div className="md:w-2/6 sm:w-full mt-5 md:mt-0">
                                <img src={attributes.image_five}/>
                            </div>                            
                    </div>
                </div>
                
            </BlockWrapperContent>

            <BlockWrapperEditor>
                    <GeneralControls label="General"/>
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}