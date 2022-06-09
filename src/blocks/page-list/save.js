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
                { attributes.showTitle && 
                    <h2 {...( attributes.addTitleURL && { className: 'page-list-title-url'})}>
                        { attributes.addTitleURL ? 
                            <a href={attributes.titleURL}>{attributes.title}</a> : attributes.title
                        }
                    </h2> 
                }
                <ul>
                    {attributes.list.map( (item, index) => {
                        return <li key={index}>
                            <a href={item.href}> <ExternalLink/> {item.text}</a>
                        </li>
                    })}
                </ul>
            </BlockWrapperContent>
            
        </BlockWrapper>
	);
}