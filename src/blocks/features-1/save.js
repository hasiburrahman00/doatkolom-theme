
export default function Save({ attributes }) {
	return (
        <div className="bg-gray-200 py-16 md:py-28">
            <div className="max-w-screen-sm mx-auto px-5">
                <h3 className="m-0 font-primary text-3xl sm:text-5xl font-normal text-primary pb-5 text-center">{attributes.heading}</h3>
                <p className="m-0 font-secondary text-lg text-primary font-normal text-center">{attributes.description}</p>
            </div>
            <div className="max-w-screen-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-5 mt-10">
                {
                    attributes.features?.map((item, index) => (
                        <a href={item.url} className="no-underline group bg-white rounded-md flex justify-center items-center flex-col space-y-5 p-10 hover:shadow-lg transition-all duration-200 ease-linear" key={index}>
                            <picture>
                                <img className="lazyload" data-src={item.image}/>
                            </picture>
                            <span className="m-0 mt-2 block text-3xl font-secondary text-primary group-hover:text-secondary">{item.label}</span>
                        </a>
                    ))
                } 
            </div>
        </div>
	);
}