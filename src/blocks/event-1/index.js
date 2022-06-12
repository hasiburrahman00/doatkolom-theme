const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/event-1', {
    title       : __( 'Doatkolom Event 1' ),
    description : __( 'For event section' ),
    keywords    : [ 'event', 'event section', 'doatkolom', 'programme' ],
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

        event_list:{
            type: 'string',
            default: [
                {
                    event_name: "Event 1",
                    guest: 20
                },
                {
                    event_name: "Event 2",
                    guest: 50
                },
                {
                    event_name: "Event 3",
                    guest: 30
                }
            ]
        }

    },
	edit        : Edit,
	save        : Save,
});