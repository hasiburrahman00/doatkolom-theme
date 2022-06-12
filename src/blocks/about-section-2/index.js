const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/about-section-1', {
    title       : __( 'Doatkolom About Section 1' ),
    description : __( 'For about section 1' ),
    keywords    : [ 'about', 'about page', 'doatkolom', 'section' ],
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

        school_image: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/school-image.webp'
        },

        heading: {
            type: 'string',
            default: 'Our Priorities'
        },

        
        
        
        
    },
	edit        : Edit,
	save        : Save,
});