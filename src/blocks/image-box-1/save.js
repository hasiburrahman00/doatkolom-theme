export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    attributes.image_box?.map((item,index)=>(
                        <div key={index} className="mb-1 text-center odd:bg-pink-100 even:bg-blue-100 rounded-lg p-4">
                            <picture>
                                <img width="80" height="80" className="object-cover lazyload" data-src={item.image} alt="service-image" />
                            </picture>
                            <h3 className="m-0 mt-4 font-secondary text-xl font-weight_primary text-primary">{item.title}</h3>
                            <p className="m-0 mt-3 text-base font-secondary font-weight_secondary text-primary">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}