const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/headmaster-1', {
    title       : __( 'Doatkolom Headmaster 1' ),
    description : __( 'For Headmaster section' ),
    keywords    : [ 'headmaster', 'headmaster section', 'doatkolom', 'headmaster quotes'],
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

        headmaster_image: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/headmaster.webp'
        },
        
        headmaster_quotes:{
            type: 'string',
            default: 'There’s no right way to be LGBT or be queer. As long as it’s true to you, it’s what you should be doing, so don’t get bogged down in the details.”'
        },
        
        headmaster_name:{
            type: 'string',
            default: 'Mohammad Rafiquzzaman'
        },
        
        headmaster_designation:{
            type: 'string',
            default: 'A neuroscience concentrator from Virginia, Kailey graduated this May and participated in the Lavender Graduation.'
        },

        teacher_image_one: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/teacher-1.webp'
        },

        teacher_image_two: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/teacher-2.webp'
        },

        teacher_image_three: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/teacher-3.webp'
        },
    },
	edit        : Edit,
	save        : Save,
});