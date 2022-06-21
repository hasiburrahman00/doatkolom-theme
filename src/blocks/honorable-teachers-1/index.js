const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/honorable-teachers-1', {
    title       : __( 'Doatkolom Honorable Teachers 1' ),
    description : __( 'For honorable teachers 1' ),
    keywords    : [ 'teachers', 'honorable', 'doatkolom', 'honorable teachers' ],
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
        
        background: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/prioritybackground.webp'
        },

        heading: {
            type: 'string',
            default: 'Our Priorities'
        },

       

        

    },
	edit        : Edit,
	save        : Save,
});