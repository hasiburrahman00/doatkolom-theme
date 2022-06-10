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
                <div className="banner-wrapper bg-cover bg-no-repeat">
                    <div className="bg-primary/70 py-28 px-5">
                        <div className="max-w-screen-xl mx-auto">
                            <h1 className="font-primary text-white mt-0 mb-6 text-center font-normal text-6xl">{attributes.institution_name}</h1>
                            <p className="max-w-3xl text-white text-center font-secondary text-lg mx-auto m-0 leading-7">{attributes.description}</p>
                        </div>
                    </div>
                </div>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}