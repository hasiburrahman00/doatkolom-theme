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
            default: 'About Our School'
        },

        paragraphs: {
            type: 'array',
            default: [
                {
                    title: 'History of the School',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
                },

                {
                    title: 'Achivment of our School',
                    description: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale.'
                }
            ]
        },

        achivments:{
            type: 'array',
            default: [
                {
                    icon: doatkolom_object.img + 'icons/running-years.svg',
                    number: "60+",
                    description: "Years of Running"
                },

                {
                    icon: doatkolom_object.img + 'icons/students.svg',
                    number: "100k+",
                    description: "Happy Students"
                },

                {
                    icon: doatkolom_object.img + 'icons/awards.svg',
                    number: "100+",
                    description: "Professional Awards"
                }
            ]
        }
        
        
        
    },
	edit        : Edit,
	save        : Save,
});