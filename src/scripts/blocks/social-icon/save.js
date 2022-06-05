const { useBlockProps } = wp.blockEditor
import { BlockWrapper, BlockWrapperContent, BlockWrapperStyle } from '../block-wrapper/index.js';

import Icons from '../Icons';

import Style from './style';
export default function Save({ attributes }) {

    const SocialIcon = Icons[attributes.icon];

	return (
        <BlockWrapper attributes={attributes} props={useBlockProps.save()}>
            
            <BlockWrapperStyle>
				<Style/>
			</BlockWrapperStyle>

            <BlockWrapperContent>
				<a href={attributes.linkURL} className="icon">
					<SocialIcon/>
				</a>
				{ attributes.showDescription && 
					<p> Still have questions? Ping us at our <a href={attributes.linkURL}>{attributes.linkText}</a>, and we'd love to help out!</p>
				}
			</BlockWrapperContent> 

        </BlockWrapper>
	);
}