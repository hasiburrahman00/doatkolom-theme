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


    },
	edit        : Edit,
	save        : Save,
});