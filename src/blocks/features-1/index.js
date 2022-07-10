import config from './../../../blocks/features-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
import HeaderControls from './header-controls';

new RegisterBlock(config).setup({
    edit: Edit,
    save: Save,
    style: Style,
    controls: [
        {
            title: 'Heading',
            component: HeaderControls
        },
        {
            title: 'General',
            component: GeneralControls
        }
    ]
})