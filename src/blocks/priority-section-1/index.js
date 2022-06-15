const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/priority-section-1', {
    title       : __( 'Doatkolom Priority Section 1' ),
    description : __( 'For priority section 1' ),
    keywords    : [ 'priority', 'priority page', 'doatkolom', 'priority section' ],
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

        sub_heading: {
            type: 'string',
            default: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
        },

        sub_heading_width: {
            type: 'number',
            default: 409
        },

        priority_box: {
            type: 'array',
            default: [
                {
                    title: 'Madical Health Care Center',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some.',
                    icon: doatkolom_object.img + 'icons/readmorearrow.svg',
                    button: {
                        text: "Read More",
                        visible: true,
                        url: "#" 
                    }
                },
                {
                    title: 'Madical Health Care Center',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some.',
                    icon: doatkolom_object.img + 'icons/readmorearrow.svg',
                    button: {
                        text: "Read More",
                        visible: true,
                        url: "#" 
                    }
                },
                {
                    title: 'Madical Health Care Center',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some.',
                    icon: doatkolom_object.img + 'icons/readmorearrow.svg',
                    button: {
                        text: "Read More",
                        visible: true,
                        url: "#" 
                    }
                },
                {
                    title: 'Madical Health Care Center',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some.',
                    icon: doatkolom_object.img + 'icons/readmorearrow.svg',
                    button: {
                        text: "Read More",
                        visible: true,
                        url: "#" 
                    }
                }
            ]
        }

    },
	edit        : Edit,
	save        : Save,
});