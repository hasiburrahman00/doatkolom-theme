import { PrevArrow ,NextArrow } from "./icons"; 

const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if( !attributes.teachers ) {
            setAttributes({teachers:[
                {
                  image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers1.webp',
                  speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                  name: "Mohammad Ashikuzzaman",
                  position: "Departmental Head Teacher, Savar Girls High School",
                },
                {
                  image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers2.webp',
                  speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                  name: "Mohammad Ashikuzzaman",
                  position: "Departmental Head Teacher, Savar Girls High School",
                },
                {
                  image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers3.webp',
                  speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                  name: "Mohammad Ashikuzzaman",
                  position: "Departmental Head Teacher, Savar Girls High School",
                },

                {
                  image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers4.webp',
                  speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                  name: "Mohammad Ashikuzzaman",
                  position: "Departmental Head Teacher, Savar Girls High School",
                },

                {
                  image: doatkolom_object.blocks + 'teachers-slider-1/img/teachers5.webp',
                  speach: "Pages is a powerful word processor that lets you create stunning documents and is included with most Apple devices. And with real-time collaboration, your team.",
                  name: "Mohammad Ashikuzzaman",
                  position: "Departmental Head Teacher, Savar Girls High School",
                }
            ] })
        }
    },[])

	return (
		    <div className="max-w-screen-xl px-5 mx-auto py-10">
                <div className="main-teachers-slider max-w-[1000px] mx-auto relative">
                    <div className="arrows hidden">
                        <button className="slick-next-btn w-[50px] h-[50px] rounded-full border-none bg-primary_light hover:bg-primary transition ease-linear duration-150 cursor-pointer absolute top-[41%] right-[-105px] translate-y-[-50%] z-10 hidden">
                            <PrevArrow/>
                        </button>
                        <button className="slick-prev-btn w-[50px] h-[50px] rounded-full border-none bg-primary_light hover:bg-primary transition ease-linear duration-150 cursor-pointer absolute top-[41%] left-[-105px] translate-y-[-50%] z-10 hidden">
                            <NextArrow/>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-4">
                        <div className="teachers-slider">
                        {
                            attributes.teachers?.map((item,index)=>(
                                <div key={index}>
                                    <p className="m-0 font-secondary text-lg md:text-xl font-weight_secondary text-paragraph mb-4 lg:mb-0">{item.speach}</p>
                                    <div className="flex items-center mb-5 lg:mb-0">
                                        <picture className="block lg:hidden overflow-hidden">
                                            <img width="100" height="120" className="object-contain w-28 h-28" src={item.image} alt="teacher-image" />
                                        </picture>
                                        
                                        <div className="ml-5 lg:ml-0 mt-6">
                                            <h3 className="m-0 font-secondary mb-2 md:mb-0 text-lg md:text-2xl font-weight_tertiary text-primary">{item.name}</h3>
                                            <h4 className="m-0 font-secondary text-sm md:text-base font-weight_primary text-black">{item.position}</h4>        
                                        </div>
                                    </div>
                                </div>
                            ))          
                        }            
                        </div>
                       <div className="hidden lg:block">
                            <div className="testimonials-slides lg:mx-auto">
                                {
                                    attributes.teachers?.map((item,index)=>(
                                        <div className="text-center w-[370px] h-[350px] overflow-hidden" key={index}>
                                            <picture>
                                                <img width="370" height="350" className="object-contain h-full" src={item.image} alt="teachers" />
                                            </picture>
                                        </div>
                                    ))
                                }         
                            </div> 
                       </div>
                    </div>   
                    <div className="slider-dots mt-4 md:mt-6"></div>     
                </div>
            </div>
	    );
}