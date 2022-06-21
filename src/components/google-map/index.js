const {cloneElement} = wp.element;

export default function GoogleMap (props){

    const Embed = <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.342050657155!2d90.24668811545315!3d23.841984691187484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebc46b198f35%3A0xbe86adc3e2b1d4c8!2sSavar%20Girl&#39;s%20School!5e0!3m2!1sen!2sbd!4v1655820148327!5m2!1sen!2sbd"></iframe>
    
    const parser = new DOMParser();

    const doc = parser.parseFromString(props.embed, "text/xml");

    const Component = cloneElement(Embed,{
        width: "100%",
        height: "430",
        className: "block",
        src: doc.querySelector('iframe').getAttribute('src')

    })

    return Component
}

