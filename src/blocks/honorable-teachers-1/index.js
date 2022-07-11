import config from '../../../blocks/honorable-teachers-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
import GeneralControls from './general-controls';
import TeacherDetailsControls from './teachersdetails-controls'
import TeacherImagesControls from './teacherimages-controls';
import TeachersControls from './teachers-controls';

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
            title: 'All Teachers',
            component: TeachersControls
        },

        {
            title: 'Teachers Details',
            component: TeacherDetailsControls
        },

        {
            title: 'Image',
            component: TeacherImagesControls
        }
    ]
})