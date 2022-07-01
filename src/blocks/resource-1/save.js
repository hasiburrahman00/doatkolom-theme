const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';
import { Routine, ClassRoutine, ExamRoutine, Syllabus, NoticeBoard, Events } from "./icons";
import Style from './style.js';
export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

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
                                {attributes.result_title_visibility &&
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <Routine/>
                                        <a href={attributes.result_title_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.result_title}</h3>
                                        </a>
                                    </div>    
                                }

                                {attributes.class_routine_visibility &&          
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <ClassRoutine/>
                                        <a href={attributes.class_routine_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.class_routine}</h3>
                                        </a>
                                    </div>
                                }

                                {attributes.exam_routine_visibility && 
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <ExamRoutine/>
                                        <a href={attributes.exam_routine_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.exam_routine}</h3>
                                        </a>
                                    </div>
                                }

                                {attributes.syllabus_visibility &&              
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <Syllabus/>
                                        <a href={attributes.syllabus_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.syllabus}</h3>
                                        </a>
                                    </div>
                                }

                                {attributes.notice_board_visibility &&            
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <NoticeBoard/>
                                        <a href={attributes.notice_board_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.notice_board}</h3>
                                        </a>
                                    </div>
                                }

                                {attributes.event_visibility &&             
                                    <div class="py-6 px-3.5 bg-white rounded-lg text-center font-secondary md:text-lg lg:text-3xl">
                                        <Events/>
                                        <a href={attributes.event_link} className="text-primary hover:text-secondary no-underline">
                                            <h3 className="m-0 mt-2">{attributes.event}</h3>
                                        </a>
                                    </div>
                                }
                        </div>
                    </div>
                </div>

            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}