const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';
import ExternalLink from '../../Icons/external-link';
import Style from './style.js';

export default function Save({ attributes }) {
	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>

            <BlockWrapperStyle>
                <Style/>
            </BlockWrapperStyle>

            <BlockWrapperContent>
                <div className="text-center">
                    {attributes.show_heading && <h1 className="font-primary text-primary text-5xl font-normal">{attributes.heading}</h1>}
                    {attributes.show_heading_details && <p className="font-secondary text-lg para-width text-primary">{attributes.heading_details}</p>}  
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}