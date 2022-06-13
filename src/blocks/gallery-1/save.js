const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';

import Style from './style.js';
export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
            <div className="max-w-screen-xl mx-auto md:w-full sm:w-full">
                    <div className="md:flex  justify-between sm:w-full lg:w-full">
                            <div className="md:w-1/4 sm:w-full  md:mr-5 ">
                                <img src={attributes.image_one}/>
                            </div>               
                            <div className="md:w-3/4 sm:w-full mt-5 md:mt-0">
                                <img src={attributes.image_two}/>
                            </div>                            
                    </div>
                    <div className="md:flex  justify-between sm:w-full lg:w-full md:mt-5">
                            <div className="md:w-3/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                                <img src={attributes.image_three}/>
                            </div>               
                            <div className="md:w-1/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                                <img src={attributes.image_four}/>
                            </div>                            
                            <div className="md:w-2/6 sm:w-full mt-5 md:mt-0">
                                <img src={attributes.image_five}/>
                            </div>                            
                    </div>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}