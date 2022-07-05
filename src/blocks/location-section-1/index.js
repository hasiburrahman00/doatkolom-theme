import config from '../../../blocks/location-section-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
import LocationControls from './location-controls'
import LocationImageControls from './location-image';

new RegisterBlock(config).setup({
    edit: Edit,
    save: Save,
    style: Style,
    controls: [
        {
            title: 'General',
            component: GeneralControls
        },
        {
            title: 'Location',
            component: LocationControls
        },
        {
            title: 'Image',
            component: LocationImageControls
        }
    ]
})