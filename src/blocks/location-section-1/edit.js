import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import { LocationArrow } from "./icons";
import GeneralControls from "./general-controls";
import LocationControls from "./location-controls";

import Style from "./style";
import LocationImageControls from "./location-image";
import GoogleMap from "../../components/google-map";


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
                    <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                            <div className="lg:pr-14 md:pr-0">
                                <h2 className="m-0 text-primary font-normal font-primary text-5xl leading-snug">{attributes.heading}</h2>
                                <p className="font-secondary text-primary font-normal text-lg m-0 mt-5">{attributes.header_details}</p>           
                                <h3 className="m-0 text-primary font-normal font-primary text-2xl mt-8">{attributes.location_heading}</h3>
                                
                                <p className="m-0 mt-3 text-primary font-normal font-secondary text-lg">{attributes.location}</p>                 
                                <p className="m-0 text-primary font-normal font-secondary text-lg">{attributes.city}</p>

                                <a href={attributes.map_link.url} className="flex items-center bg-primary rounded-md justify-center mt-8 no-underline ">

                                    <LocationArrow/>

                                    <span className="text-white font-medium font-secondary px-2 py-3">{attributes.map_link.text}</span>
                                </a>                 
                            </div>

                            <div className="col-span-2 rounded-md overflow-hidden shadow-xl border-8 border-solid border-white mt-10 md:mt-11 lg:mt-0">
                                
                                <GoogleMap className="b" embed={attributes.map_iframe_link}/>
                                
                            </div>
                        </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                           {
                               attributes.background.map((item,index)=>(
                                   <div key={index} className="rounded-md overflow-hidden">
                                        <picture>
                                            <img className="block" src={item.image} alt="location-image" />
                                        </picture>
                                    </div>
                               ))
                           }
                       </div>
                    </div>
            </BlockWrapperContent>

            <BlockWrapperEditor>
                <GeneralControls label="General"/>
                <LocationControls label = "Location"/>
                <LocationImageControls label = "Images"/>
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}