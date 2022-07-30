export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl px-5 py-14 mx-auto md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <h3 className="m-0 mb-3 text-primary font-secondary text-xl font-weight_secondary">{attributes.top_heading}</h3>
                    <h1 className="m-0 mb-4 font-secondary font-weight_secondary text-black text-3xl md:text-4xl lg:text-5xl leading-[50px] md:leading-[60px] lg:leading-[70px_!important]"
                     dangerouslySetInnerHTML={{__html: attributes.heading}}
                    />
                    <p className="m-0 text-black font-secondary font-weight_primary text-base lg:text-lg lg:pr-7">{attributes.description}</p>
                    {
                        attributes.button.visible &&
                        <a href="#" className="bg-primary text-white hover:bg-primary_dark hover:text-white py-3 px-10 rounded-md inline-block no-underline mt-10 text-base lg:text-lg">{attributes.button.text}</a>
                    }
                   
                </div>
                <div className="overflow-hidden rounded-md mt-7 md:mt-10 lg:mt-20 h-[386px]">
                    <picture>
                        <img width="646" height="386" className="w-full h-[386px] object-cover" src={attributes.institution_image} alt="institution-image" />
                    </picture>
                </div>
            </div>           
        </div>
	);
}