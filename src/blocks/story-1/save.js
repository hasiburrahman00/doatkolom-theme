import { Arrows } from "./icons";
export default function Save({ attributes }) {
        return (
            <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 sm:p-10 history-box">
                        <p className="m-0 mb-7 font-primary text-paragraph font-weight_primary md:text-lg lg:text-xl">{attributes.person_story?.description}</p>
                        {
                            attributes.person_story?.see_more.visible &&
                            <a href={attributes.person_story.see_more.url} className="inline-flex transition ease-linear duration-100 items-center no-underline text-black hover:underline font-secondary text-lg font-weight_primary">
                            <span className="mr-3">{attributes.person_story?.see_more.text}</span>
                            <Arrows/>
                            </a>
                        }
                    </div>
                    <div className="overflow-hidden h-[400px]">
                        <picture>
                            <img width="630" height="400" className="object-cover w-full h-[400px_!important] block" src={attributes.person_story?.image} alt="person_image" />
                        </picture>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {
                        attributes.story_box.map((item,index)=>(
                            <div key={index} className="histories p-5 sm:p-10 bg-light_gray last:bg-black last:text-white">
                                <p className="m-0 font-primary text-description font-weight_primary md:text-lg lg:text-xl">{item.description}</p>
                                {
                                    item.see_more.visible && <a href={item.see_more.url} className="inline-flex transition ease-linear duration-100 items-center no-underline text-black hover:underline mt-7 font-secondary text-lg font-weight_primary">
                                        <span className="mr-3">{item.see_more.text}</span>
                                        <Arrows/>
                                    </a>
                                }
                            </div>
                        ))
                    }
                </div>          
            </div>
	);
}