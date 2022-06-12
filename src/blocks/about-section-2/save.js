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
                        <h1>adwadwa</h1>
                    </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}