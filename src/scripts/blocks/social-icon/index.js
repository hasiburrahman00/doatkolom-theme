const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/social-icon', {
    title       : __( 'Premio Social Icon' ),
    description : __( 'The block helps to display custom social media icon with url' ),
    keywords    : [ __( 'doatkolom' ), __( 'facebook' ), __( 'social icon' ), __( 'link' ) ],
    category    : 'widgets',
    icon        : 'share',
    attributes  : {
        blockId : {
            type: 'string',
        },

        alignment: {
            type: 'string',
            default: 'center',
        },

        showDescription: {
            type: 'boolean',
            default: true
        },

        linkText: {
            type: 'string',
            default: 'Facebook group',
        },

        linkURL: {
            type: 'string',
            default: 'https://www.facebook.com/groups/premioplugins/',
        },

        icon: {
            type: 'string',
            default: 'FacebookIcon',
        },
    },
	edit        : Edit,
	save        : Save,
});