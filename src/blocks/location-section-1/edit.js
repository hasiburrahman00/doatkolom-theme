import { LocationArrow } from "./icons";
import GoogleMap from "../../components/google-map";

export default function Edit({ attributes, setAttributes}) {
    
    wp.element.useEffect(()=>{
        if( !attributes.images ) {
            setAttributes({images: [
                doatkolom_object.blocks + 'location-section-1/img/locationone.webp',
                doatkolom_object.blocks + 'location-section-1/img/locationtwo.webp'
            ] })
        }
    },[])

	return (
        <div className="max-w-screen-xl px-5 mx-auto py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-start lg:gap-4">
                <div className="lg:pr-14 md:pr-0">
                    <h2 className="m-0 text-title font-weight_tartiary font-primary text-4xl md:text-5xl leading-[50px_!important] lg:leading-[70px_!important]">{attributes.heading}</h2>
                    <p className="font-secondary text-paragraph font-weight_primary text-lg m-0 mt-5">{attributes.header_details}</p>           
                    <h3 className="m-0 text-sub_title font-weight_tartiary font-primary text-2xl mt-8">{attributes.location_heading}</h3>
                    
                    <p className="m-0 mt-3 text-paragraph font-weight_primary font-secondary text-lg">{attributes.location}</p>                 
                    <p className="m-0 text-paragraph font-weight_primary font-secondary text-lg">{attributes.city}</p>

                    <a href= "#" className="flex items-center transition duration-200 ease-linear primary-shadow bg-primary hover:bg-primary_dark rounded-md justify-center mt-8 no-underline text-white hover:text-white">
                        <LocationArrow/>
                        <span className="text-white font-weight_primary font-secondary px-2 py-3">{attributes.map_link.text}</span>
                    </a>                 
                </div>
                <div className="col-span-2 rounded-md overflow-hidden shadow-xl border-8 border-solid border-white mt-10 md:mt-11 lg:mt-0">
                    <GoogleMap embed={attributes.map_iframe_link}/>
                </div>
            </div>
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                {
                    attributes.images?.map((item,index)=>(
                        <div key={index}>
                            <div className="images rounded-md overflow-hidden">
                                <picture>
                                    <img className="block object-cover" width="630" height="350" src={item} alt="location-image" />
                                </picture>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}


