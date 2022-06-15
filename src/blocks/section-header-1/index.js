const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/section-header-1', {
    title       : __( 'Doatkolom Section Header 1' ),
    description : __( 'For section header' ),
    keywords    : [ 'header', 'section header', 'doatkolom', 'title' ],
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
            default: 'text-center'
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

        container_width:{
            type: 'number',
            default: 600
        },

        alignment:{
            type: 'string',
            default: 'center'
        }
        
    },
	edit        : Edit,
	save        : Save,
});