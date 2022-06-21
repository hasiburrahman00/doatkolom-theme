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

               
                <h1>Hello world</h1>

            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}