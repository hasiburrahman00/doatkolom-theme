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
            <div className="alignment max-w-screen-xl mx-auto">
                    <h3 className="m-0 font-primary text-5xl font-normal text-primary mb-3 header">{attributes.title}</h3>
                    <p className="m-0 font-secondary text-lg text-primary font-normal para-width">{attributes.sub_title}</p>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}