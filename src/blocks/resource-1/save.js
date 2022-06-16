const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';
import { Routine } from "./icons";
import Style from './style.js';
export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div className="bg-gray-300 py-28">
                    <div className="alignment max-w-screen-xl mx-auto">
                        <h3 className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary mb-3 header">{attributes.title}</h3>
                        <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.sub_title}</p>
                    </div>
                    <div class="max-w-screen-xl mx-auto md:w-full sm:w-full px-5 mt-9">
                        <div class="md:flex sm:w-full lg:w-full">
                                <div class=" border border-solid border-gray-200 md:mr-5 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Result</h3>
                                    </a>
                                </div>               
                                <div class=" border border-solid border-gray-200 md:mr-5 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Class Routine</h3>
                                    </a>
                                </div>               
                                <div class=" border border-solid border-gray-200 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Exam Routine</h3>
                                    </a>
                                </div>          
                        </div>
                        <div class="md:flex sm:w-full lg:w-full md:mt-7">
                                <div class=" border border-solid border-gray-200 md:mr-5 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Syllabus</h3>
                                    </a>
                                </div>               
                                <div class=" border border-solid border-gray-200 md:mr-5 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Notice Board</h3>
                                    </a>
                                    
                                </div>               
                                <div class=" border border-solid border-gray-200 md:w-2/6 sm:w-full py-6 px-3.5 bg-white rounded-lg text-center font-secondary text-3xl">
                                    <Routine/>
                                    <a href="#" className="text-primary hover:text-secondary no-underline">
                                        <h3 className="m-0 mt-2">Events</h3>
                                    </a>
                                </div>          
                        </div>
                    </div>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}