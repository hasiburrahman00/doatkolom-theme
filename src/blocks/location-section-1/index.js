const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import Edit from './edit';
import Save from './save';

registerBlockType('doatkolom/location-section-1', {
    title       : __( 'Doatkolom Location Section 1' ),
    description : __( 'For location section 1' ),
    keywords    : [ 'location', 'location page', 'doatkolom', 'location section' ],
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

        heading: {
            type: 'string',
            default: 'Direction to the School'
        },

        header_details: {
            type: 'string',
            default: 'The school was established on a small scale on 19th April, 1959 at the initiative of some.'
        },

        location_heading: {
            type: 'string',
            default: 'Our Location'
        },

        location: {
            type: 'string',
            default: 'Dakkhin Para,' 
        },

        city: {
            type: 'string',
            default: 'Savar, Dhaka.1340'
        },

        map_link: {
            type: 'object',
            default: {
                text: 'Open With The Google Map',
                url: `https://www.google.com/maps`
            } 

        },

        map_iframe_link: {
            type: 'string',
            default: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.342050657155!2d90.24668811545315!3d23.841984691187484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebc46b198f35%3A0xbe86adc3e2b1d4c8!2sSavar%20Girl&#39;s%20School!5e0!3m2!1sen!2sbd!4v1655819209726!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },

        background: {
            type: 'array',
            default: [
                {
                    image: doatkolom_object.img + 'blocks/locationone.webp'
                },
                {
                    image: doatkolom_object.img + 'blocks/locationtwo.webp'
                }
            ]
        }

        

    },
	edit        : Edit,
	save        : Save,
});