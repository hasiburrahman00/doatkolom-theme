import config from './../../../blocks/mission-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
import DescriptionControls from './description-controls'
// import NoticeControls from './notice-controls';

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
            title: 'Description',
            component: DescriptionControls
        },
        // {
        //     title: 'Notice',
        //     component: NoticeControls
        // }
    ]
})