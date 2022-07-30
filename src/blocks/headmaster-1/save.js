import {Quotes,RightArrow} from './icon'

export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl mx-auto px-5 py-10">
            <div className="lg:flex items-center">
                <div className="relative mx-5 lg:mx-0 inline-block">
                    <img width="470" height="470" className="relative z-10 object-cover h-auto rounded-lg overflow-hidden w-full sm:w-auto sm:max-w-[470px_!important] lazyload" data-src={attributes.image}/>        
                    <div className="absolute top-5 -left-5 z-0 bg-light_gray rounded-lg w-full h-full"></div>
                </div>
                <div className="pt-20 lg:pt-0 lg:pl-20">
                    <h3 className="font-secondary text-xl sm:text-4xl font-weight_primary text-paragraph m-0 relative">
                        <div className="absolute -top-8 left-1 md:-top-8 text-primary md:-left-4 opacity-40">
                            <Quotes />
                        </div>
                        {attributes.speech}
                    </h3>  

                    <h2 className="m-0 mt-8 font-primary text-lg font-weight_secondary text-primary">{attributes.name}</h2> 
                    <p className="m-0 text-lg font-secondary font-weight_primary text-paragraph mt-3.5">{attributes.designation}</p> 
                    {
                        attributes.teachers_page.visible &&
                        <a href={ attributes.teachers_page.link} className="inline-block sm:inline-flex group items-center font-secondary text-lg font-weight_primary text-primary no-underline mt-5 md:mt-10 sm:space-x-5">
                            <div className="flex items-center space-x-2 md:-space-x-4">
                            {
                                attributes.teachers_image?.map( (item, index) => (
                                    <span className="w-12 h-12 rounded-full overflow-hidden border border-solid border-white bg-primary_light" key={index}>
                                        <picture>
                                            <img width="46" height="46" className="w-[100%_!important] h-[100%_!important] object-cover teacher-image lazyload" data-src={item}/>
                                        </picture>
                                    </span>
                                ) )
                            }
                            </div>
                            <span className="hidden sm:flex w-12 h-12 transition-all duration-200 ease-linear rounded-full bg-primary_light group-hover:bg-primary group-hover:text-white justify-center items-center mr-4">
                                <RightArrow/>
                            </span>
                            <span className="ml-1 mt-3 md:mt-0 group-hover:underline text-black inline-block">{attributes.teachers_page.text}</span>
                        </a> 
                    }
                </div>
            </div>
        </div>
	);
}