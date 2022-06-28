import { NextArrow ,PrevArrow} from "./icons";
const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes, clientId, name }) {

    wp.element.useEffect(()=>{
        if( !attributes.teachers_image ) {
            setAttributes({teachers_image: [
                doatkolom_object.blocks + 'honorable-teachers-1/img/Ellipse 60.webp',
                doatkolom_object.blocks + 'honorable-teachers-1/img/Ellipse 61.webp',
                doatkolom_object.blocks + 'honorable-teachers-1/img/Ellipse 62.webp'
            ] })
        }

        if( !attributes.testimonial ) {
            setAttributes({testimonial: doatkolom_object.blocks + 'honorable-teachers-1/img/testiminial-bg.webp',})
        }
    },[])

	return (
		    <div className="max-w-screen-xl lg:px-0 px-5 mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="m-0 font-primary text-primary font-normal text-5xl mb-3">{attributes.heading}</h2>
                                <p className="m-0 font-secondary text-primary font-normal text-lg">{attributes.sub_heading}</p>

                                <div className="honorable-teacher-slider mt-8">
                                    {
                                        attributes.honorable_teacher.map((item,index)=>(
                                            <div key={index} className = "pr-0 md:pr-10">
                                                <div className="flex items-center">
                                                    <picture className="block md:hidden">
                                                        <img className="object-cover w-28 h-28 rounded-full overflow-hidden" src={item.image} alt="teacher-image" />
                                                    </picture>
                                                   
                                                    <div className="ml-5 md:ml-0">
                                                        <h3 className="m-0 font-primary text-2xl font-normal text-primary">{item.names}</h3>
                                                        <h4 className="m-0 mb-3 font-secondary text-lg font-normal text-primary">{item.position}</h4>        
                                                    </div>
                                                </div>
                                                <p className="m-0 font-secondary text-lg font-normal text-primary">{item.speach}</p>
                                            </div>
                                        ))
                                    }
                                </div>


                                <div className="flex flex-wrap items-center mt-8">
                                    <div className="slider-dots"></div>
                                    <div className="flex">

                                        <button type="button" class="slick-prev-btn ml-8 border-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                                            <PrevArrow/>
                                        </button>
                                        <button type="button" class="slick-next-btn ml-5 mr-8 border-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                                            <NextArrow/>
                                        </button>
                                        
                                    </div>

                                    <div className="flex ml-3 md:ml-8 mt-6 md:mt-0">
                                        {
                                            attributes.teachers_image?.map((item,index)=>(
                                                <div key={index} className="teachers">
                                                    <a href={attributes.image_link}>
                                                        <picture>
                                                            <img className="object-cover" src={item} alt="teacher-image" />
                                                        </picture>
                                                    </a>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <a className="inline-block ml-5 capitalize font-secondary text-primary font-regular text-lg" href={attributes.more_info.link}>{attributes.more_info.text}</a>
                                </div>    
                        </div>

                        <div className="text-center md:block hidden">
                            <picture>
                                <img className="object-cover" src={attributes.testimonial} alt="testimonial-bg" />
                            </picture>                                
                        </div>
                </div>        
            </div>
	);
}