export default function Edit({ attributes, setAttributes }) {
    wp.element.useEffect(()=>{
        if( !attributes.content ) {
            setAttributes({content: [
                {
                    title: "Library",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'timeline-tab-1/img/timeline-tab-1.webp'
                },
                {
                    title: "Computer lab",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'timeline-tab-1/img/timeline-tab-2.webp'
                },
                {
                    title: "Science lab",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'timeline-tab-1/img/timeline-tab-3.webp'
                }
            ]})
        }
    },[])

	return (
		<div className="py-16 md:py-28 bg-paste-green px-5">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h2 className="font-primary text-3xl md:text-5xl font-normal m-0 pb-10 md:p-0 text-paste-green-400 max-w-[662px] md:leading-14">{attributes.heading}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <div className="tab-content md:sticky md:top-36 md:mt-20">
                            <div className="relative">
                                <span className="hidden md:inline-block vertical-line absolute left-0 top-0 w-1.5 bg-[#C1F1FF] rounded-full h-full"></span>
                                <div className="md:pl-8 space-y-10">
                                    {
                                        attributes?.content?.map((item, index) => (
                                            <div key={index} className={`tab-item md:opacity-50 cursor-pointer group duration-200 transition ease-in text-white tab-item-index-${index}`} data-index={index}>
                                                <picture>
                                                    <img className="w-full block md:hidden mb-8" src={item.img}/>
                                                </picture>
                                                <h2 className="m-0 p-0 text-2xl font-primary group-hover:underline font-normal mb-3">{item.title}</h2>
                                                <p className="m-0 p-0 text-base font-secondary">{item.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:inline-block">
                        <div className="doatkolom-image-tab">
                            {
                                attributes?.content?.map((item, index) => (
                                    <div key={index} className="image-tab-item min-h-[calc(100vh_-_100px)] flex items-center flex-col justify-center">
                                        <picture>
                                            <img className="w-full" src={item.img} data-index={index} id={`tab-image-index-${index}`}/>
                                        </picture>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}