import { NextArrow ,PrevArrow} from "./icons";

export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="main-teachers-slider max-w-[1000px] mx-auto relative">
                    <div className="arrows hidden">
                        <button className="slick-prev-btn w-[50px] h-[50px] rounded-full border-none bg-primary_light hover:bg-primary transition ease-linear duration-150 cursor-pointer absolute top-[41%] right-[-105px] translate-y-[-50%] z-10 hidden">
                            <PrevArrow/>
                        </button>
                        <button className="slick-next-btn w-[50px] h-[50px] rounded-full border-none bg-primary_light hover:bg-primary transition ease-linear duration-150 cursor-pointer absolute top-[41%] left-[-105px] translate-y-[-50%] z-10 hidden">
                            <NextArrow/>
                        </button>
                    </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="teachers-slider mt-16">
                        {
                            attributes.teachers?.map((item,index)=>(
                                <div key={index} className = "pr-0 md:pr-10">
                                    <p className="m-0 font-secondary text-lg md:text-xl font-weight_tertiary text-black mb-4 lg:mb-0">{item.speach}</p>
                                    <div className="flex items-center mb-5 lg:mb-0">
                                        <picture className="block lg:hidden overflow-hidden">
                                            <img className="object-cover w-28 h-28" src={item.image} alt="teacher-image" />
                                        </picture>
                                        
                                        <div className="ml-5 lg:ml-0 mt-6">
                                            <h3 className="m-0 font-secondary mb-2 md:mb-0 text-sm md:text-2xl font-weight_tertiary text-primary">{item.name}</h3>
                                            <h4 className="m-0 font-secondary text-sm md:text-lg font-weight_primary text-black">{item.position}</h4>        
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