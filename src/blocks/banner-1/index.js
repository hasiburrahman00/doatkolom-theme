const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/banner-1', {
    title       : __( 'Doatkolom Banner 1' ),
    description : __( 'For page banner section' ),
    keywords    : [ 'banner', 'page banner', 'doatkolom', 'hero', 'hero area' ],
    category    : 'widgets',
    icon        : 'screenoptions',
    getEditWrapperProps() {
        return {
            'data-align': 'full'
        };
    },
    attributes  : {
        blockId : {
            type: 'string',
        },

        blockName: {
            type: 'string',
        },

        background: {
            type: 'string',
            default: doatkolom_object.img + 'blocks/banner-1-background.webp'
        },

        institution_name: {
            type: "string",
            default: "Savar Girls High School"
        },
        
        description: {
            type: 'string',
            default: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities who are passionate about women's education in the area. Dakkhin Para, Savar, Dhaka.1340-School Code: 1517 EIIN: 108409"
        }
        
    },
	edit        : Edit,
	save        : Save,
});