export default function Save({ attributes }) {
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
                            attributes?.content?.map((item, index) => (
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
                    <div className="doatkolom-image-tab">
                        {
                            attributes?.content?.map((item, index) => (
                                <div key={index} className="image-tab-item min-h-[calc(100vh_-_200px)] flex items-center flex-col justify-center" data-index={index}>
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
    </div>
    )
}