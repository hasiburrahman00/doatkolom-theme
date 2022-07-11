const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';

import Style from './style.js';
import { RightArrow } from './icons.js';
export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div class="max-w-screen-xl mx-auto md:w-full sm:w-full px-5">
                    <div class="md:flex md:flex-wrap sm:w-full lg:w-full">
                        { attributes.event_list.map((item,index)=>(
                            <div class=" border border-solid border-gray-200 md:w-2/6 sm:w-full py-6 px-3.5">
                                <div className="font-secondary text-6xl text-primary font-bold w-20 text-center">{item.event_date} <p className="text-lg font-normal m-0 -mt-2 ">{item.event_month}</p></div>
                                <h3 className="font-secondary text-3xl text-primary font-bold m-0 my-3.5">{item.event_name}</h3>
                                <p className="font-secondary text-lg text-primary font-normal m-0 mb-9">{item.event_details}</p>
                                <a href={item.reademore_link} className="flex items-center font-secondary text-lg font-normal text-primary no-underline"><span className="w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center mr-4"><RightArrow/></span> Read More</a>
                            </div>               
                        ))}
                    </div>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}