import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";
import GeneralControls from "./general-controls";
import {Quotes,RightArrow} from './icon'
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
                <div class="max-w-screen-xl mx-auto md:w-full sm:w-full px-5">
                    <div class="md:flex md:flex-wrap sm:w-full lg:w-full lg:flex-nowrap">
                        <div class="w-5/5 md:w-5/5 lg:w-2/5  md:mr-24 relative z-10 headmaster-image">
                            <div className="hidden md:hidden lg:block img-bg-shape absolute top-0 left-0 -z-10"></div>
                            <img className="lg:ml-6 lg:-mt-6 w-full h-full" src={attributes.headmaster_image}/>        
                        </div>
                        <div class="w-5/5 md:w-5/5 lg:w-3/5 sm:w-full mt-10 ">
                            <h3 className="font-secondary text-4xl font-medium text-primary m-0 relative">
                                <div className="absolute -top-8 left-1 md:-top-8 md:-left-4 md:-top-8 md:-left-6">
                                    <Quotes />
                                </div>
                                {attributes.headmaster_quotes}
                            </h3>  

                            <h2 className="m-0 mt-8 font-primary text-lg font-normal text-primary">{attributes.headmaster_name}</h2> 

                            <p className="m-0 text-lg font-secondary font-light text-primary mt-3.5">{attributes.headmaster_designation}</p> 

                            <a href="#" className="flex  md:flex-row flex-wrap items-center  font-secondary text-lg font-normal text-primary no-underline mt-10">
                                <span className="inline-block w-12 h-12 rounded-full bg-gray-100">
                                    <picture>
                                        <img className="teacher-image" src={attributes.teacher_image_one}/>
                                    </picture>
                                </span>
                                <span className="inline-block w-12 h-12 rounded-full bg-gray-100 -ml-1.5">
                                    <picture>
                                        <img className="teacher-image" src={attributes.teacher_image_two}/>
                                    </picture>
                                </span>
                                <span className="inline-block w-12 h-12 rounded-full bg-gray-100 mr-9 -ml-1.5">
                                    <picture>
                                        <img className="teacher-image" src={attributes.teacher_image_three}/>
                                    </picture>
                                </span>
                                <span className="inline-block w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center mr-4"><RightArrow/></span> See our honoroble teachers
                            </a>    
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