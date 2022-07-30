import { NextArrow ,PrevArrow} from "./icons";

export default function Save({ attributes }) {
	return (
		<div className="max-w-screen-xl px-5 mx-auto py-8">
            <div className="relative h-[172px_!important] md:h-[630px_!important] overflow-hidden">
                <div className="image-slider relative">
                    {
                        attributes.images?.map((item,index)=>(
                            <div key={index}>
                                <div>
                                    <picture>
                                        <img width="1280" height="630" className="object-cover lazyload" data-src={item}/>
                                    </picture>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="block lg:hidden">
                    <button type="button" className="slick-prev-btn text-primary left-arrow absolute bg-primary_light border-0 w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                        <PrevArrow/>
                    </button>
                        
                    <button type="button" className="slick-next-btn text-primary right-arrow border-0 bg-primary_light w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
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
                                            <img className="object-cover opacity-50 transition ease-linear duration-300 lazyload" width="248" height="134" data-src={item}/>
                                        </picture>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="hidden lg:block">
                    <button type="button" className="lg:block slick-prev-btn absolute bg-primary_light border-0 text-primary w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                        <PrevArrow/>
                    </button>
                        
                    <button type="button" className="slick-next-btn border-0 bg-primary_light w-[50px] h-[50px] text-primary rounded-full flex items-center justify-center cursor-pointer transition ease-linear duration-200 hover:bg-primary hover:text-white">
                        <NextArrow/>
                    </button>
                </div>         
            </div>
        </div>
	);
}