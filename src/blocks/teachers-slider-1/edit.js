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
		    <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
                <div className="main-teachers-slider max-w-[1000px] mx-auto relative">
                    <button className="slick-prev-btn w-[50px] h-[50px] rounded-full border-none bg-red-100 hover:bg-red-500 transition ease-linear duration-150 cursor-pointer absolute top-[41%] right-[-105px] translate-y-[-50%] z-10 hidden lg:block">
                        <PrevArrow/>
                    </button>
                    <button className="slick-next-btn w-[50px] h-[50px] rounded-full border-none bg-red-100 hover:bg-red-500 transition ease-linear duration-150 cursor-pointer absolute top-[41%] left-[-105px] translate-y-[-50%] z-10 hidden lg:block">
                        <NextArrow/>
                    </button>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="teachers-slider mt-16">
                            {
                            attributes.teachers?.map((item,index)=>(
                                <div key={index} className = "pr-0 md:pr-10">
                                    <p className="m-0 font-secondary text-lg md:text-xl font-weight_tertiary text-black-90 mb-4 lg:mb-0">{item.speach}</p>
                                    <div className="flex items-center mb-5 lg:mb-0">
                                        <picture className="block lg:hidden overflow-hidden">
                                            <img className="object-cover w-28 h-28" src={item.image} alt="teacher-image" />
                                        </picture>
                                        
                                        <div className="ml-5 lg:ml-0 mt-6">
                                            <h3 className="m-0 font-secondary mb-2 md:mb-0 text-sm md:text-2xl font-weight_tertiary text-red-500">{item.name}</h3>
                                            <h4 className="m-0 font-secondary text-sm md:text-lg font-weight_secondary text-black-90">{item.position}</h4>        
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
                                                <img width="370" height="350" className="object-cover  h-full" src={item.image} alt="teachers" />
                                            </picture>
                                        </div>
                                    ))
                                }         
                            </div> 
                       </div>
                    </div>   
                    <div className="slider-dots mt-7"></div>     
                </div>
                
            </div>
	);
}