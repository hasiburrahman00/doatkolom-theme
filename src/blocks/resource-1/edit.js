import {BlockWrapper, BlockWrapperContent, BlockWrapperEditor, BlockWrapperStyle} from "../block-wrapper";
import Style from "./style";
import GeneralControls from "./general-controls";
import HeaderControls from "./header-controls";
const { useEffect } = wp.element;
const { useBlockProps } = wp.blockEditor
import { Routine, ClassRoutine, ExamRoutine, Syllabus, NoticeBoard, Events } from "./icons";

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

                <div className="bg-gray-200 py-28">
                    <div className="alignment max-w-screen-xl mx-auto px-5">
                        <h3 className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary mb-3 header">{attributes.title}</h3>
                        <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.sub_title}</p>
                    </div>
                    <div class="max-w-screen-xl mx-auto md:w-full sm:w-full px-5 mt-9">
                        <div class="grid md:grid-cols-3 gap-4">
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <Routine/>
                                    <a href={attributes.result_title_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.result_title}</h3>
                                    </a>
                                </div>               
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <ClassRoutine/>
                                    <a href={attributes.class_routine_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.class_routine}</h3>
                                    </a>
                                </div>               
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <ExamRoutine/>
                                    <a href={attributes.exam_routine_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.exam_routine}</h3>
                                    </a>
                                </div>  
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <Syllabus/>
                                    <a href={attributes.syllabus_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.syllabus}</h3>
                                    </a>
                                </div>               
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <NoticeBoard/>
                                    <a href={attributes.notice_board_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.notice_board}</h3>
                                    </a>
                                    
                                </div>               
                                <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                    <Events/>
                                    <a href={attributes.event_link} className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">{attributes.event}</h3>
                                    </a>
                                </div>    
                        </div>
                    </div>
                </div>

            </BlockWrapperContent>

            <BlockWrapperEditor>
                    <GeneralControls label="General"/>
                    <HeaderControls label="Header"/>
            </BlockWrapperEditor>
        </BlockWrapper>
	);
}