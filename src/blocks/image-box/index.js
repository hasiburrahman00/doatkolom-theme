import config from '../../../blocks/image-box/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
// import TeacherDetailsControls from './teachersdetails-controls'
// import TeachersControls from './teachers-controls';

new RegisterBlock(config).setup({
    edit: Edit,
    save: Save,
    style: Style,
    controls: [
        {
            title: 'General',
            component: GeneralControls
        },
    ]
})