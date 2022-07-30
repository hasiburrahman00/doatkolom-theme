import { Arrows } from "./icons";
export default function Save({ attributes }) {
        return (
        <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="pt-10 px-10 history-box  pb-12 lg:pb-32">
                        <p className="m-0 mb-7 font-primary text-paragraph font-weight_primary md:text-lg lg:text-xl">{attributes.person_history?.description}</p>
                        <a href={attributes.person_history?.see_more.url} className="inline-flex transition ease-linear duration-100 items-center no-underline text-black hover:underline">
                            <span className="mr-3">{attributes.person_history?.see_more.text}</span>
                            <Arrows/>
                        </a>
                    </div>
                    <div className="overflow-hidden h-[400px]">
                        <picture>
                            <img width="630" height="400" className="object-cover w-full h-[400px_!important] block lazyload" data-src={attributes.person_history?.image} alt="person_image" />
                        </picture>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {
                        attributes.history_box.map((item,index)=>(
                            <div key={index} className="histories p-10 bg-light_gray last:bg-black last:text-white">
                                <p className="m-0 font-primary text-description font-weight_primary md:text-lg lg:text-xl">{item.description}</p>
                                <a href={item.see_more.url} className="inline-flex transition ease-linear duration-100 items-center no-underline text-black hover:underline mt-7">
                                    <span className="mr-3">{item.see_more.text}</span>
                                    <Arrows/>
                                </a>
                            </div>
                        ))
                    }
                </div>          
        </div>
	);
}