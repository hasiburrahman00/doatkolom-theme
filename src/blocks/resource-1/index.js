const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/resource-1', {
    title       : __( 'Doatkolom Resource 1' ),
    description : __( 'For show school resource like routine, result, notice etc' ),
    keywords    : [ 'routine', 'result', 'doatkolom', 'notice','Syllabus' ],
    category    : 'widgets',
    icon        : 'screenoptions',
    getEditWrapperProps() {
        return {
            'data-align': 'full'
        };
    },
    attributes  : {
        block_id : {
            type: 'string',
        },

        block_name: {
            type: 'string',
        },

        alignment:{
            type: 'string',
            default: 'center'
        },

        title:{
            type: 'string',
            default: 'Upcoming School Events'
        },

        sub_title:{
            type: 'string',
            default: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
        },

        sub_title_width:{
            type: 'number',
            default: 496
        },

        result_title:{
            type: 'string',
            default: 'Result'
        },

        result_title_link:{
            type: 'string',
            default: '#'
        },
        
        result_title_visibility:{
            type: 'boolean',
            default: true
        },

        class_routine:{
            type: 'string',
            default: 'Class Routine'
        },

        class_routine_link:{
            type: 'string',
            default: '#'
        },
                
        class_routine_visibility:{
            type: 'boolean',
            default: true
        },

        exam_routine:{
            type: 'string',
            default: 'Exam Routine'
        },

        exam_routine_link:{
            type: 'string',
            default: '#'
        },
                        
        exam_routine_visibility:{
            type: 'boolean',
            default: true
        },

        syllabus:{
            type: 'string',
            default: 'Syllabus'
        },

        syllabus_link:{
            type: 'string',
            default: '#'
        },
                                
        syllabus_visibility:{
            type: 'boolean',
            default: true
        },

        notice_board:{
            type: 'string',
            default: 'Notice Board'
        },

        notice_board_link:{
            type: 'string',
            default: '#'
        },
                                        
        notice_board_visibility:{
            type: 'boolean',
            default: true
        },

        event:{
            type: 'string',
            default: 'Events'
        },

        event_link:{
            type: 'string',
            default: '#'
        },
                                                
        event_visibility:{
            type: 'boolean',
            default: true
        },


    },
	edit        : Edit,
	save        : Save,
});