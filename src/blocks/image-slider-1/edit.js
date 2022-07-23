import { NextArrow ,PrevArrow} from "./icons";

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if(!attributes.images){
            setAttributes({images: [
                doatkolom_object.blocks + 'image-slider-1/img/slider1.webp',
                doatkolom_object.blocks + 'image-slider-1/img/slider2.webp',
                doatkolom_object.blocks + 'image-slider-1/img/slider3.webp',
                doatkolom_object.blocks + 'image-slider-1/img/slider4.webp',
                doatkolom_object.blocks + 'image-slider-1/img/slider5.webp',
                doatkolom_object.blocks + 'image-slider-1/img/slider6.webp',
            ]})
        }

    },[])

	return (
		    <div className="max-w-screen-xl px-5 mx-auto py-8">
                <div className="relative h-[172px_!important] md:h-[630px_!important] overflow-hidden">
                    <div className="image-slider relative">
                        {
                            attributes.images?.map((item,index)=>(
                                <div key={index}>
                                    <div>
                                        <picture>
                                            <img width="1280" height="630" className="object-cover" src={item}/>
                                        </picture>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="block lg:hidden">
                        <button type="button" className="slick-prev-btn left-arrow absolute bg-gray-100 border-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-secondary hover:text-white">
                            <PrevArrow/>
                        </button>
                            
                        <button type="button" className="slick-next-btn right-arrow border-0 bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-secondary hover:text-white">
                            <NextArrow/>
                        </button>
                    </div>
                </div>
                <div className="main-images relative">
                    <div className="h-[100px_!important] md:h-[134px_!important] overflow-hidden">
                        <div className="bottom-image-wrapper mt-4">
                            {
                                attributes.images?.map((item,index)=>(
                                    <div key={index}>
                                        <div className="overflow-hidden relative mx-1">
                                            <picture>
                                                <img className="object-cover opacity-50 transition ease-linear duration-300" width="248" height="134" src={item}/>
                                            </picture>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
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