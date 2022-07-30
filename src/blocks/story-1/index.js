import config from '../../../blocks/story-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
import AchivementControls from './achivement-controls'

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
            title: 'Achivement Controls',
            component: AchivementControls
        }
    ]
})