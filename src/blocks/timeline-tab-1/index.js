import config from './../../../blocks/timeline-tab-1/block.json';
import RegisterBlock from '../../modules/register-block';
import Edit from './edit';
import Save from './save';
import Style from './style';
// import GeneralControls from './general-controls';
// import HistoryControls from './history-controls'
// import NoticeControls from './notice-controls';

new RegisterBlock(config).setup({
    edit: Edit,
    save: Save,
    style: Style,
    controls: [
        // {
        //     title: 'General',
        //     component: GeneralControls
        // },
        // {
        //     title: 'History',
        //     component: HistoryControls
        // },
        // {
        //     title: 'Notice',
        //     component: NoticeControls
        // }
    ]
})