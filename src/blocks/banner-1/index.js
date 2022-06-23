// const { registerBlockType } = wp.blocks;
// const { __ } = wp.i18n;
// import Edit from './edit';
// import Save from './save';

// registerBlockType('doatkolom/banner-1', {
//     title       : __( 'Doatkolom Banner 1' ),
//     description : __( 'For page banner section' ),
//     keywords    : [ 'banner', 'page banner', 'doatkolom', 'hero', 'hero area' ],
//     category    : 'widgets',
//     icon        : 'screenoptions',
    
//     attributes  : {
//         block_id : {
//             type: 'string',
//         },

//         block_name: {
//             type: 'string',
//         },

//         background: {
//             type: 'string',
//             default: doatkolom_object.img + 'blocks/banner-1-background.webp'
//         },

//         institution_name: {
//             type: "string",
//             default: "Savar Girls High School"
//         },
        
//         description: {
//             type: 'string',
//             default: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities who are passionate about women's education in the area. Dakkhin Para, Savar, Dhaka.1340-School Code: 1517 EIIN: 108409"
//         },

//         primary_btn: {
//             type: 'object',
//             default: {
//                 text: 'Know More About Us',
//                 url: '#',
//                 visible: true
//             }
//         },

//         secondary_btn: {
//             type: 'object',
//             default: {
//                 text: 'Latest Update',
//                 url: '#',
//                 visible: true
//             }
//         },

//         history_title:{
//             type: "string",
//             default: "History"
//         },
//         history_description:{
//             type: "string",
//             default: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established"
//         },

//         history_read_more_btn: {
//             type: "object",
//             default: {
//                 text: 'Read More',
//                 url: '#',
//                 visible: true,
//             }
//         },
        
//         notice_url: {
//             type: "string",
//             default: '#'
//         },

//         notice_title: {
//             type: "string",
//             default: "Notice Board"
//         },

//         notice_description: {
//             type: 'string',
//             default: 'Admission, Events, Exam, Etc.'
//         }
        
        
//     },
// 	edit        : Edit,
// 	save        : Save,
// });

import config from './../../../blocks/banner-1/block.json';
import RegisterBlock from '../../modules/register-block';

new RegisterBlock(config).setup({
    edit: function(){
        return <h1>Editor Compoennt</h1>
    },

    save: function() {
        return <h1>Save Component</h1>
    }
})