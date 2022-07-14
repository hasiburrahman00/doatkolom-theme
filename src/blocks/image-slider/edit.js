import { NextArrow ,PrevArrow} from "./icons";
const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if(!attributes.images){
            setAttributes({images: [
                doatkolom_object.blocks + 'image-slider/img/slider1.webp',
                doatkolom_object.blocks + 'image-slider/img/slider2.webp',
                doatkolom_object.blocks + 'image-slider/img/slider3.webp',
                doatkolom_object.blocks + 'image-slider/img/slider4.webp',
                doatkolom_object.blocks + 'image-slider/img/slider5.webp',
                doatkolom_object.blocks + 'image-slider/img/slider6.webp',
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
                                        <div className="overflow-hidde relative mx-1">
                                            <picture>
                                                <img className="object-cover" width="248" height="134" src={item}/>
                                            </picture>
                                            <div className="overlay absolute top-0 left-0 w-full h-full bg-white/40"></div>
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