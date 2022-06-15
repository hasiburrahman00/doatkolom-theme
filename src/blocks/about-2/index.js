const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/about-2', {
    title       : __( 'Doatkolom About 2' ),
    description : __( 'For about section' ),
    keywords    : [ 'about', 'about section', 'doatkolom',],
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

        
    },
	edit        : Edit,
	save        : Save,
});