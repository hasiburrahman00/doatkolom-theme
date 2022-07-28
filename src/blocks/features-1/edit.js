export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect( () => {
        if( !attributes.features ) {
            setAttributes({
                features: [
                    {
                        image: doatkolom_object.blocks + 'features-1/img/result.svg',
                        label: "Result",
                        url  : "#"
                    },
                    {
                        image: doatkolom_object.blocks + 'features-1/img/class-routine.svg',
                        label: "Class Routine",
                        url  : "#"
                    },
                    {
                        image: doatkolom_object.blocks + 'features-1/img/exam-routine.svg',
                        label: "Exam Routine",
                        url  : "#"
                    },
                    {
                        image: doatkolom_object.blocks + 'features-1/img/syllabus.svg',
                        label: "Syllabus",
                        url  : "#"
                    },
                    {
                        image: doatkolom_object.blocks + 'features-1/img/notice-board.svg',
                        label: "Notice Board",
                        url  : "#"
                    },
                    {
                        image: doatkolom_object.blocks + 'features-1/img/events.svg',
                        label: "Events",
                        url  : "#"
                    }
                ]
            })
        }
    }, [] );

	return (
		<div className="bg-gray-200 py-16 md:py-28">
            <div className="max-w-screen-sm mx-auto px-5">
                <h3 className="m-0 font-primary text-3xl sm:text-5xl font-weight_secondary text-primary pb-5 text-center">{attributes.heading}</h3>
                <p className="m-0 font-secondary text-lg text-primary font-weight_secondary text-center">{attributes.description}</p>
            </div>
            <div className="max-w-screen-xl grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 mx-auto px-5 mt-10">
                {
                    attributes.features?.map((item, index) => (
                        <a href="#" className="no-underline group bg-white rounded-md flex justify-center items-center flex-col space-y-3 sm:space-y-5 p-4 sm:p-10 hover:shadow-lg transition-all duration-200 ease-linear" key={index}>
                            <picture>
                                <img width="80" height="80" className="w-14 sm:w-20" src={item.image}/>
                            </picture>
                            <span className="m-0 mt-2 block text-base sm:text-3xl font-secondary text-primary group-hover:text-secondary">{item.label}</span>
                        </a>
                    ))
                } 
            </div>
        </div>
	);
}