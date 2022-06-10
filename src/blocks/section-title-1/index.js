const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/section-title-1', {
    title       : __( 'Doatkolom Section Title 1' ),
    description : __( 'For page section title' ),
    keywords    : [ 'section', 'section title', 'doatkolom', 'title', 'section heading' ],
    category    : 'widgets',
    icon        : 'screenoptions',
    getEditWrapperProps() {
        return {
            'data-align': 'full'
        };
    },
    attributes  : {
        blockId : {
            type: 'string',
        },

        blockName: {
            type: 'string',
        },

        heading:{
            type: 'string',
            default: 'Upcoming School Events',
        },
        heading_details:{
            type: 'string',
            default: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
        },
        heading_details_width:{
            type: 'number',
            default: '469'
        },
        show_heading:{
            type: 'boolean',
            default: true
        },
        show_heading_details:{
            type: 'boolean',
            default: true
        }
        
    },
	edit        : Edit,
	save        : Save,
});