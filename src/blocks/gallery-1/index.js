const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/gallery-1', {
    title       : __( 'Doatkolom Gallery 1' ),
    description : __( 'For gallery section' ),
    keywords    : [ 'gallery', 'gallery section', 'doatkolom', 'picture', 'image', 'image list' ],
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

        image_one: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/gallery-image-one.webp'
        },

        image_two: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/gallery-image-two.webp'
        },

        image_three: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/gallery-image-three.webp'
        },

        image_four: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/gallery-image-four.webp'
        },

        image_five: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/gallery-image-five.webp'
        },

    },
	edit        : Edit,
	save        : Save,
});