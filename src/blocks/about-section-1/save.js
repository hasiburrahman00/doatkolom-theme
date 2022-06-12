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
                <div className="max-w-screen-xl mx-auto">
                        <div className="flex space-x-24 items-center">
                            <div className="school-image flex-auto">
                                <div>
                                    <picture>
                                        <img data-src={attributes.school_image} alt="school-image"/>
                                    </picture>
                                </div>
                            </div>
                            <div>
                                122
                            </div>
                        </div>
                    </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}