import { NextArrow ,PrevArrow} from "./icons";
const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if(!attributes.slider){
            setAttributes({slider: [
                doatkolom_object.blocks + 'images-slider/img/slider1.webp',
                doatkolom_object.blocks + 'images-slider/img/slider2.webp',
                doatkolom_object.blocks + 'images-slider/img/slider3.webp',
                doatkolom_object.blocks + 'images-slider/img/slider4.webp',
                doatkolom_object.blocks + 'images-slider/img/slider5.webp',
                doatkolom_object.blocks + 'images-slider/img/slider6.webp',
            ]})
        }

    },[])

	return (
		    <div className="max-w-screen-xl lg:px-0 px-2 mx-auto py-5 md:py-6">
                <div className="image-slider">
                    {
                        attributes.slider?.map((item,index)=>(
                            <div key={index}>
                                <div>
                                    <picture>
                                        <img className="w-full h-full object-cover" src={item}/>
                                    </picture>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="main-images relative">
                    <div className="bottom-image-wrapper mt-4">
                        {
                            attributes.slider?.map((item,index)=>(
                                <div key={index}>
                                    <div className="overflow-hidde relative mx-1">
                                        <picture>
                                            <img className="w-full h-full object-cover block" src={item}/>
                                        </picture>
                                        <div className="overlay absolute top-0 left-0 w-full h-full bg-white/40"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                   <div className="hidden lg:block">
                        <button type="button" className="lg:block slick-prev-btn absolute bg-gray-100 border-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-secondary hover:text-white">
                            <PrevArrow/>
                        </button>
                        
                        <button type="button" className="slick-next-btn border-0 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-secondary hover:text-white">
                            <NextArrow/>
                        </button>
                   </div>
                                   
                </div>
            </div>
	);
}