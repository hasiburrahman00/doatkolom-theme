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
            default: 'Honorable Teachers'
        },

        sub_heading: {
            type: 'string',
            default: 'We have 20 teachers teaching out studentls with care'
        },

        honorable_teacher: {
            type: 'array',
            default: [
                {
                    names: 'Mohammad Rafiquzzaman',
                    position: 'Head Teacher of the School',
                    speach: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
                },

                {
                    names: 'Mohammad Rafiquzzaman',
                    position: 'Head Teacher of the School',
                    speach: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
                },

                {
                    names: 'Mohammad Rafiquzzaman',
                    position: 'Head Teacher of the School',
                    speach: 'The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.'
                }
            ]
        }


       

        

    },
	edit        : Edit,
	save        : Save,
});