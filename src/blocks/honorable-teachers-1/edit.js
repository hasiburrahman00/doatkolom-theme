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
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h2 className="m-0 font-primary text-primary font-normal text-5xl mb-3">{attributes.heading}</h2>
                                <p className="m-0 font-secondary text-primary font-normal text-lg">{attributes.sub_heading}</p>

                                <div className="honorable-teacher-wrapper mt-8">
                                    {
                                        attributes.honorable_teacher.map((item,index)=>(
                                            <div key={index} className = "pr-10">
                                                <h3 className="m-0 font-primary text-2xl font-normal text-primary">{item.names}</h3>
                                                <h4 className="m-0 mb-3 font-secondary text-lg font-normal text-primary">{item.position}</h4>
                                                <p className="m-0 font-secondary text-lg font-normal text-primary">{item.speach}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="flex items-center">
                                    <div className="slider-dots"></div>
                                </div>
                            </div>
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