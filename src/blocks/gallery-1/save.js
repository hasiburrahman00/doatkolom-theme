import { useAttributes, image } from "./index";
import { ArrowRight } from "./icon";
export default function Save({ attributes }) {
	useAttributes(attributes)
	return (
        <div className="max-w-screen-xl mx-auto py-2 px-5">
            <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-2 sm:mb-4">
                <picture className="col-span-2">
                    <img className="w-full object-cover h-[150px_!important] sm:h-[300px_!important] lazyload" width="315px" height="380"  data-src={image(0)}/>
                </picture>               
                <picture className="col-span-3">
                    <img className="w-full object-cover h-[150px_!important] sm:h-[300px_!important] lazyload" width="945" height="380" data-src={image(1)}/>
                </picture>                            
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <picture>
                    <img className="w-full object-cover h-[150px_!important] sm:h-[300px_!important] lazyload" width="620" height="380" data-src={image(2)}/>
                </picture>
                <picture>
                    <img className="w-full object-cover h-[150px_!important] sm:h-[300px_!important] lazyload" width="207" height="380" data-src={image(3)}/>
                </picture>
                <picture>
                    <img className="w-full object-cover h-[150px_!important] sm:h-[300px_!important] lazyload" width="413" height="380" data-src={image(4)}/>
                </picture>                           
            </div>
            <div className="text-center sm:text-right mt-4">
                <a className="inline-flex items-center space-x-2 text-xl sm:text-2xl md:text-3xl font-primary text-primary underline transition duration-200 ease-linear hover:text-primary_dark" href={attributes.gallery_page_url}>
                    <span>See More Photos</span>
                    <ArrowRight/>
                </a>
            </div>
        </div>
	);
}