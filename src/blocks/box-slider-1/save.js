import { PrevArrow,NextArrow } from "./icons";
export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="main-box-slider relative">
            <div className="box-slider">
                {
                attributes.box_slider?.map((item,index)=>(
                    <div key={index} className="text-center w-48 rounded-md bg-white py-5 border border-gray-100 border-solid">
                    <picture>
                        <img width="50" height="60" className="object-cover lazyload" data-src={item.background} alt="service-image" />
                    </picture>
                    <p className="center-text transition ease-linear duration-300 m-0 mt-3 text-lg font-secondary font-bold text-black-90">{item.text}</p>
                    </div>
                ))
                }       
            </div>
            <div className="arrows hidden">
              <button className="slick-prev-btn w-[50px] h-[50px] rounded-full border-none bg-red-100 hover:bg-red-500 transition ease-linear duration-150 cursor-pointer absolute top-[25%] right-[-65px] translate-y-[-50%] z-10">
                    <PrevArrow/>
                </button>
                <button className="slick-next-btn w-[50px] h-[50px] rounded-full border-none bg-red-100 hover:bg-red-500 transition ease-linear duration-150 cursor-pointer absolute top-[25%] left-[-65px] translate-y-[-50%] z-10">
                    <NextArrow/>
                </button>
            </div>
            </div>
        </div>
	);
}