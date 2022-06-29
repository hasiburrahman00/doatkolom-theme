export default function Edit({ attributes, setAttributes }) {
    wp.element.useEffect(()=>{
        if( !attributes.content ) {
            setAttributes({content: [
                {
                    title: "Library",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'banner-1/img/banner-1-background.webp'
                },
                {
                    title: "Computer lab",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'banner-1/img/banner-1-background.webp'
                },
                {
                    title: "Science lab",
                    description: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. The school was established on a small scale on 19th April, 1959 at the initiative of some personalities. ",
                    img: doatkolom_object.blocks + 'banner-1/img/banner-1-background.webp'
                }
            ]})
        }
    },[])

	return (
		<div className="py-28 bg-[#035769] px-5">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <h2 className="font-primary text-5xl font-normal m-0 p-0 text-[#C1F1FF] max-w-[662px] leading-14">{attributes.heading}</h2>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <div className="tab-content sticky top-28 mt-20 space-y-10">
                            {
                                attributes?.content.map((item, index) => (
                                    <div key={index} className="tab-item" data-index={index}>
                                        <picture>
                                            <img className="w-full hidden" src={item.img}/>
                                        </picture>
                                        <h2 className="m-0 p-0 text-2xl font-primary font-normal">{item.title}</h2>
                                        <p className="m-0 p-0 text-base font-secondary">{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        {
                            attributes?.content.map((item, index) => (
                                <div key={index} className="tab-image min-h-[calc(100vh_-_200px)] flex items-center flex-col justify-center" data-index={index}>
                                    <picture>
                                        <img className="w-full" src={item.img}/>
                                    </picture>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
	);
}