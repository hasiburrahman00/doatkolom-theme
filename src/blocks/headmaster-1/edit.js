import { Quotes,RightArrow } from './icon';
export default function Edit({ attributes, setAttributes }) {

    wp.element.useEffect(()=>{
        if( !attributes.image ) {
            setAttributes({image: doatkolom_object.blocks + 'headmaster-1/img/headmaster.webp'})
        }
        
        if( !attributes.teachers_image ) {
            setAttributes({teachers_image: [
                doatkolom_object.blocks + 'headmaster-1/img/teacher-1.webp',
                doatkolom_object.blocks + 'headmaster-1/img/teacher-2.webp',
                doatkolom_object.blocks + 'headmaster-1/img/teacher-3.webp'
            ]})
        }

    },[]);

	return (
        <div className="max-w-screen-xl mx-auto px-5 py-10 md:py-20">
            <div className="lg:flex items-center">
                <div className="relative mx-5 lg:mx-0 inline-block">
                    <img className="relative z-10 rounded-lg overflow-hidden w-full sm:w-auto sm:max-w-[470px_!important]" src={attributes.image}/>        
                    <div className="absolute top-5 -left-5 z-0 bg-[#E9E9E9] rounded-lg w-full h-full"></div>
                </div>
                <div className="pt-20 lg:pt-0 lg:pl-20">
                    <h3 className="font-secondary text-xl sm:text-4xl font-medium text-primary m-0 relative">
                        <div className="absolute -top-8 left-1 md:-top-8 md:-left-4 opacity-50">
                            <Quotes />
                        </div>
                        {attributes.speech}
                    </h3>  

                    <h2 className="m-0 mt-8 font-primary text-lg font-normal text-primary">{attributes.name}</h2> 
                    <p className="m-0 text-lg font-secondary font-light text-primary mt-3.5">{attributes.designation}</p> 

                    <a href="#" className="inline-block sm:inline-flex group items-center font-secondary text-lg font-normal text-primary no-underline mt-5 md:mt-10 sm:space-x-5">
                        <div className="flex items-center space-x-2 md:-space-x-4">
                            {
                                attributes.teachers_image?.map( (item, index) => (
                                    <span className="w-12 h-12 rounded-full overflow-hidden border border-solid border-white bg-gray-100" key={index}>
                                        <picture>
                                            <img className="teacher-image w-full h-full object-cover" src={item}/>
                                        </picture>
                                    </span>
                                ) )
                            }
                        </div>
                        <span className="hidden sm:flex w-12 h-12 transition-all duration-200 ease-linear rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white justify-center items-center mr-4">
                            <RightArrow/>
                        </span>
                        <span className="ml-1 group-hover:underline">See our honoroble teachers</span>
                    </a>    
                </div>
            </div>
        </div>
	);
}