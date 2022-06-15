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
            type: 'array',
            default: [
                
                {
                    event_date: '15',
                    event_month: 'june',
                    event_name: "Biggest Int'l Education Expo 2022 - Dhaka",
                    event_details: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.",
                    reademore_link: '#'
                   
                },
                {
                    event_date: '15',
                    event_month: 'june',
                    event_name: "Biggest Int'l Education Expo 2022 - Dhaka",
                    event_details: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.",
                    reademore_link: '#'
                   
                },
                {
                    event_date: '15',
                    event_month: 'june',
                    event_name: "Biggest Int'l Education Expo 2022 - Dhaka",
                    event_details: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.",
                    reademore_link: '#'
                },
                
            ]
        }

    },
	edit        : Edit,
	save        : Save,
});