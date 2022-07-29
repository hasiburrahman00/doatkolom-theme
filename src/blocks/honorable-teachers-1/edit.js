import { NextArrow ,PrevArrow} from "./icons";
const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if( !attributes.honorable_teacher ) {
            setAttributes({honorable_teacher:[
                {
                  image: doatkolom_object.blocks + 'honorable-teachers-1/img/teacher1.webp',
                  names: "Mohammad Rafiquzzaman",
                  position: "Head Teacher of the School",
                  speach: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities."
                },
        
                {
                  image: doatkolom_object.blocks + 'honorable-teachers-1/img/teacher2.webp',
                  names: "Mohammad Rafiquzzaman",
                  position: "Head Teacher of the School",
                  speach: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities."
                },
        
                {
                  image: doatkolom_object.blocks + 'honorable-teachers-1/img/teacher3.webp',
                  names: "Mohammad Rafiquzzaman",
                  position: "Head Teacher of the School",
                  speach: "The school was established on a small scale on 19th April, 1959 at the initiative of some personalities.The school was established on a small scale on 19th April, 1959 at the initiative of some personalities."
                }
              ] })
        }
        
        if( !attributes.teachers_image ) {
            setAttributes({teachers_image: [
                doatkolom_object.blocks + 'honorable-teachers-1/img/teachers1.webp',
                doatkolom_object.blocks + 'honorable-teachers-1/img/teachers2.webp',
                doatkolom_object.blocks + 'honorable-teachers-1/img/teachers3.webp'
            ] })
        }

        if( !attributes.testimonial ) {
            setAttributes({testimonial: doatkolom_object.blocks + 'honorable-teachers-1/img/testiminial-bg.webp',})
        }

    },[])

	return (
		    <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <h2 className="m-0 font-primary text-primary font-weight_primary text-4xl md:text-5xl mb-3">{attributes.heading}</h2>
                        <p className="m-0 font-secondary text-primary font-weight_primary text-base md:text-lg">{attributes.sub_heading}</p>

                            <div className="honorable-teacher-slider mt-8">
                                {
                                    attributes.honorable_teacher?.map((item,index)=>(
                                        <div key={index} className = "pr-0 md:pr-10">
                                            <div className="flex items-center mb-5 lg:mb-0">
                                                <picture className="block lg:hidden w-28 h-28 overflow-hidden">
                                                    <img className="object-cover w-full h-full" src={item.image} alt="teacher-image" />
                                                </picture>
                                                   
                                            <div className="ml-5 lg:ml-0">
                                                <h3 className="m-0 font-primary text-lg md:text-2xl font-weight_primary text-primary">{item.names}</h3>
                                                <h4 className="m-0 mb-3 font-secondary text-base md:text-lg font-weight_primary text-primary">{item.position}</h4>        
                                            </div>
                                            </div>
                                            <p className="m-0 font-secondary text-lg font-weight_primary text-primary">{item.speach}</p>
                                        </div>
                                        ))
                                }
                            </div>

                            <div className="flex flex-wrap items-center mt-8">
                                <div className="slider-dots"></div>
                                <div className="flex">

                                    <button type="button" className="slick-prev-btn ml-8 border-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                                        <PrevArrow/>
                                    </button>

                                    <button type="button" className="slick-next-btn ml-5 mr-8 border-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                                        <NextArrow/>
                                    </button>
                                        
                                </div>

                                <div className="others-teacher flex items-center ml-3 lg:ml-8 mt-5 sm:mt-0">
                                    {
                                        attributes.teachers_image?.map((item,index)=>(
                                            <div key={index} className="teachers w-10 h-10 rounded-full overflow-hidden">
                                                <a href="#">
                                                    <picture>
                                                        <img width="50" height="50" className="object-cover w-full h-full" src={item} alt="teacher-image" />
                                                    </picture>
                                                </a>
                                            </div>
                                        ))
                                    }
                                   <div>
                                    <a className="inline-block ml-5 capitalize font-secondary text-primary font-regular text-lg" href="#">
                                        {attributes.more_info.text}</a>   
                                   </div>
                                </div>          
                            </div>    
                    </div>     

                        <div className="testimonial relative text-center lg:block hidden">
                            <picture>
                                <img className="object-cover" src={attributes.testimonial} alt="testimonial-bg" />
                            </picture>
                            <div className="testimonial-slides">
                                {
                                    attributes.honorable_teacher?.map((item,index)=>(
                                        <div className="text-center" key={index}>
                                            <picture>
                                                <img className="object-cover w-full h-full rounded-full" src={item.image} alt="top-teachers" />
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