import config from './../../../blocks/gallery-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';

new RegisterBlock(config).setup({
    edit: Edit,
    save: Save,
    style: Style,
    controls: [
        {
            title: 'General',
            component: GeneralControls
        }
    ]
})

let attributes;

export function useAttributes(attr) {
    attributes = attr;
}

export function image(index = 0) {
    if( attributes.images && attributes.images[index] ) {
        return attributes.images[index]
    }

    return '';
}