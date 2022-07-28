export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if( !attributes.image_box ) {
            setAttributes({image_box:[
                {
                  image: doatkolom_object.blocks + 'image-box-1/img/money.webp',
                  title: "Affordable fees",
                  description: "This is an important thing that every parent looks at when paying fees. You must always expect the fees to be low so that more people can benefit.",
                },
        
                {
                  image: doatkolom_object.blocks + 'image-box-1/img/class.webp',
                  title: "Regular class",
                  description: "This is an important thing that every parent looks at when paying fees. You must always expect the fees to be low so that more people can benefit.",
                },

                {
                  image: doatkolom_object.blocks + 'image-box-1/img/exam.webp',
                  title: "class test",
                  description: "This is an important thing that every parent looks at when paying fees. You must always expect the fees to be low so that more people can benefit.",
                },

                {
                  image: doatkolom_object.blocks + 'image-box-1/img/phases.webp',
                  title: "Attendance Management",
                  description: "This is an important thing that every parent looks at when paying fees. You must always expect the fees to be low so that more people can benefit.",
                }
            ] })
        }
    },[])

	return (
		<div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    attributes.image_box?.map((item,index)=>(
                        <div key={index} className="mb-1 text-center odd:bg-pink-100 even:bg-blue-100 rounded-lg p-4">
                            <picture>
                                <img width="80" height="80" className="object-cover" src={item.image} alt="service-image" />
                            </picture>
                            <h3 className="m-0 mt-4 font-secondary text-xl font-weight_primary text-primary">{item.title}</h3>
                            <p className="m-0 mt-3 text-base font-secondary font-weight_secondary text-primary">{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}