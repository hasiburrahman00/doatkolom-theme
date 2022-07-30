export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if( !attributes.institution_image ) {
            setAttributes({institution_image: doatkolom_object.blocks + 'about-2/img/about-2-background.webp' })
        }
    },[])

	return (
		<div className="max-w-screen-xl px-5 py-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-5">
                <div>
                    <h3 className="m-0 mb-3 text-sub_title font-secondary text-xl font-weight_secondary">{attributes.top_heading}</h3>
                    <h1 className="m-0 mb-4 font-primary font-weight_tertiary text-title text-3xl md:text-4xl lg:text-5xl leading-[50px] md:leading-[60px] lg:leading-[70px_!important]"
                     dangerouslySetInnerHTML={{__html: attributes.heading}}
                    />
                    <p className="m-0 text-title_description font-secondary font-weight_primary text-base lg:text-lg lg:pr-7">{attributes.description}</p>
                    {
                        attributes.button.visible &&
                        <a href="#" className="bg-primary text-white hover:bg-primary_dark hover:text-white py-3 px-10 primary-shadow transition duration-200 ease-linear rounded-md inline-block no-underline mt-10 text-base lg:text-lg">{attributes.button.text}</a>
                    }
                   
                </div>
                <div className="overflow-hidden rounded-md -order-1 md:order-1">
                    <picture>
                        <img width="646" height="386" className="w-full object-cover" src={attributes.institution_image} alt="institution-image" />
                    </picture>
                </div>
            </div>           
        </div>
	);
}