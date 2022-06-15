import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
// import AchivementControls from "./achivement-controls";
// import DescriptionControls from "./description-controls";
import { ArrowRight } from "./icons";
import BoxControls from "./box-controls";
import GeneralControls from "./general-controls";
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
                <div className="banner-wrapper bg-cover bg-no-repeat">
                    <div className="bg-slate-300/90 md:pt-24 md:pb-24">
                        <div className="max-w-screen-xl lg:px-0 px-5 mx-auto">

                            <div className="text-center">
                                <h2 className="font-primary m-0 mb-3 font-normal text-primary  lg:text-5xl md:text-2xl leading-9">{attributes.heading}</h2>
                                <p className="sub-header font-secondary font-normal text-primary leading-6 text-lg lg:text-lg mb-7 ">{attributes.sub_heading}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
                                {
                                    attributes.priority_box.map((item,index)=>(
                                        <div key={index} className="main-prioritybox mb-3 bg-white p-5 shadow-lg last: ml-0">
                                            <span className="font-secondary font-bold text-slate-200 text-5xl">{index+1 > 9 ? index+1 : `0${index+1}`}</span>
                                            <h3 className="font-secondary font-bold text-primary text-3xl mb-0">{item.title}</h3>
                                            <p className="font-secondary font-normal text-primary text-lg leading-6">{item.description}</p>
                                            <div>
                                                <a href="#" className="flex items-center text-primary group">
                                                    <span className="arrows w-12 h-12 flex items-center justify-center bg-slate-100 rounded-full mr-3 group-hover:bg-primary group-hover:text-white ease-linear duration-200 transition">
                                                        <ArrowRight/>
                                                    </span>
                                                    <span className="group-hover:text-primary group-hover:underline">{item.button.text}</span>
                                                </a>
                                            </div>
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
                <BoxControls label = "Details"/>
                {/* <DescriptionControls label = "Description"/>
                <AchivementControls label = "Achivement"/>
                <HistoryControls label="History"/>
                <NoticeControls label="Notice"/> */}
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}