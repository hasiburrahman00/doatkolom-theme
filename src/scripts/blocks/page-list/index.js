const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/page-list', {
    title       : __( 'Premio Page List' ),
    description : __( 'The block displays custom page list with anchor tag' ),
    keywords    : [ __( 'doatkolom' ), __( 'page list' ), __( 'page' ), __( 'list' ) ],
    category    : 'widgets',
    icon        : 'list-view',
    attributes  : {
        blockId : {
            type: 'string',
        },

        alignment: {
            type: 'string',
            default: 'start',
        },

        showTitle: {
            type: 'boolean',
            default: true
        },

        addTitleURL: {
            type: 'boolean',
            default: false,
        },

        titleURL: {
            type: 'string',
            default: '#',
        },

        title: {
            type: 'string',
            default: 'General Questions'
        },
        list: {
            type    : 'array',
            default : [
                {
                    text    : 'Page link 1',
                    href    : '#',
                },
                {
                    text    : 'Page link 2',
                    href    : '#',
                }
            ]
        }
    },
	edit        : Edit,
	save        : Save,
});