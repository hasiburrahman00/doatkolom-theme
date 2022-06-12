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
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex space-x-24 items-start">
                        <div className="school-image flex-auto">
                            <div className="relative z-0 before:content-[''] before:absolute before:left-0 before:top-8 before:rounded-xl before:w-full before:h-full before:bg-gray-200">
                                <picture>
                                    <img className="relative z-10 w-full left-8" src={attributes.school_image} alt="school-image"/>
                                </picture>
                            </div>
                        </div>
                        <div className="flex-auto">
                            <h2 className="font-primary text-5xl text-primary font-normal mt-0">{attributes.heading}</h2>

                            <div>
                                {attributes.paragraphs.map((item,index)=>(
                                    <div key={index}>
                                        <h3 className="font-primary m-0 font-normal text-primary text-2xl leading-9">{item.title}</h3>
                                        <p className="font-secondary font-normal text-primary  text-lg m-0 mt-3 mb-7 ">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex">
                                {
                                    attributes.achivments.map((item,index)=>(
                                            <div className="achivement-wrapper pr-7" key={index}>
                                                <img className="achivment-icons" src= {item.icon} alt="years" />
                                                <h3 className="m-0 mt-3 font-primary font-normal text-primary text-2xl">{item.number}</h3>
                                                <p className="m-0 mt-2 font-secondary font-normal text-primary text-xl leading-4">{item.description}</p>
                                            </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </BlockWrapperContent>

            <BlockWrapperEditor>
                <GeneralControls label="General"/>
                {/* <HistoryControls label="History"/>
                <NoticeControls label="Notice"/> */}
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}