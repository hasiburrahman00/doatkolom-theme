import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";
import GeneralControls from "./general-controls";
import { RightArrow } from "./icons";
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
            
                <div class="max-w-screen-xl mx-auto md:w-full sm:w-full">
                    <div class="md:flex md:flex-wrap sm:w-full lg:w-full">
                        { attributes.event_list.map((item,index)=>(
                            <div class=" border border-solid border-gray-200 md:w-2/6 sm:w-full py-6 px-3.5">
                                <div className="font-secondary text-6xl text-primary font-bold w-20 text-center">{item.event_date} <p className="text-lg font-normal m-0 -mt-2">{item.event_month}</p></div>
                                <h3 className="font-secondary text-3xl text-primary font-bold m-0 my-3.5">{item.event_name}</h3>
                                <p className="font-secondary text-lg text-primary font-normal m-0 mb-9">{item.event_details}</p>
                                <a href="#" className="flex items-center font-secondary text-lg font-normal text-primary no-underline"><span className="inline-block w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center mr-4"><RightArrow/></span> Read More</a>
                            </div>               
                        ))}
                    </div>
                </div>
    
            </BlockWrapperContent>

            <BlockWrapperEditor>
                    <GeneralControls label="General"/>
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}