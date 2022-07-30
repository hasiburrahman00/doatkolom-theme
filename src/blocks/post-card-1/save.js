export default function Save({ attributes }) {
	return (
		<div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    attributes.post_card?.map((item,index)=>(
                        <div key={index} className="mb-4">
                            <div className="h-[350px] overflow-hidden">
                                {
                                    item.post_btn.visible ?
                                    <a href={item.post_btn.url}>
                                        <picture>
                                            <img width="500" height="350" className="w-full h-full object-cover lazyload" data-src={item.image} alt="teacher-image"/>
                                        </picture>
                                    </a>
                                    :
                                    <picture>
                                        <img width="500" height="350" className="w-full h-full object-cover lazyload" data-src={item.image} alt="teacher-image"/>
                                    </picture>

                                }
                            </div>
                            <h3 className="m-0 mt-7 font-primary text-primary font-weight_tertiary text-2xl">{item.names}</h3>
                            <h4 className="m-0 mt-1 font-secondary text-black font-weight_primary text-lg">{item.position}</h4>
                            <p className="m-0 mt-4 font-secondary text-paragraph font-weight_primary text-lg">{item.description}</p>
                            {
                                item.post_btn.visible && 
                                <a className="inline-block mt-6 font-secondary font-weight_secondary text-base no-underline bg-primary py-2 px-5 rounded-md text-white hover:text-white hover:bg-primary_dark transition ease-linear duration-150" href={item.post_btn.url}>{item.post_btn.text}</a>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
	);
}