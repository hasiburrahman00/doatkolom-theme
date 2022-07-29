export default function Edit({ attributes, setAttributes }) {

    wp.element.useEffect(()=>{
        if( !attributes.background ) {
            setAttributes({background: doatkolom_object.blocks + 'cta-1/img/call-to-action-background.webp' })
        }
    },[])

	return (
		<div className="banner-wrapper bg-cover bg-no-repeat">
            <div className="max-w-screen-xl px-2 sm:px-5 lg:px-56 py-14 mx-auto md:py-20 text-center">
                <h2 className="m-0 text-white font-primary font-weight_primary text-3xl leading-[40px] md:text-5xl md:leading-[80px]">{attributes.title}</h2>
                <p className="text-white m-0 mt-5 font-secondary font-weight_primary text-base md:text-lg">{attributes.description}</p>
                {
                    attributes.primary_button.visible &&
                    <a href="#" className="inline-block no-underline mt-7 bg-white py-3 w-[140px] sm:w-36 md:w-52 border-white border border-solid rounded-md text-black-90  font-secondary font-weight_primary text-sm md:text-lg cursor-pointer hover:bg-transparent hover:text-white transition ease-linear duration-200">{attributes.primary_button.text}</a>
                }
                {
                    attributes.secondary_button.visible &&
                    <a href="#" className="inline-block no-underline mt-7 bg-transparent py-3 w-[140px] sm:w-36 md:w-52 border-white border border-solid rounded-md text-white  font-secondary font-weight_primary text-sm md:text-lg cursor-pointer hover:bg-white hover:text-black-90 transition ease-linear duration-200 ml-3 md:ml-5">{attributes.secondary_button.text}</a>
                }
            </div>
        </div>
	);
}