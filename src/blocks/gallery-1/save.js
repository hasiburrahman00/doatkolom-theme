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
                <div className="max-w-screen-xl mx-auto md:w-full sm:w-full px-5">
                    <div className="md:flex  justify-between sm:w-full lg:w-full">
                        <div className="md:w-1/4 sm:w-full  md:mr-5 ">
                            <picture>
                                <img className="lazyload" width="315px" height="380"  data-src={attributes.image_one}/>
                            </picture>
                        </div>               
                        <div className="md:w-3/4 sm:w-full mt-5 md:mt-0">
                            <picture>
                                <img className="lazyload" width="945" height="380" data-src={attributes.image_two}/>
                            </picture>
                        </div>                            
                    </div>
                    <div className="md:flex  justify-between sm:w-full lg:w-full md:mt-5">
                        <div className="md:w-3/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                            <picture>
                                <img className="lazyload" width="620" height="380" data-src={attributes.image_three}/>
                            </picture>
                        </div>               
                        <div className="md:w-1/6 sm:w-full md:mr-5 mt-5 md:mt-0">
                            <picture>
                                <img className="lazyload" width="207" height="380" data-src={attributes.image_four}/>
                            </picture>
                        </div>                            
                        <div className="md:w-2/6 sm:w-full mt-5 md:mt-0">
                            <picture>
                                <img className="lazyload" width="413" height="380" data-src={attributes.image_five}/>
                            </picture>
                        </div>                            
                    </div>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}