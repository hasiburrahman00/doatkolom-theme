export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if( !attributes.box_slider ) {
            setAttributes({box_slider:[
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider1.webp',
                  text: "Physics" 
                },
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider2.webp',
                  text: "Chemical science" 
                },
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider3.webp',
                  text: "Biology" 
                },
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider4.webp',
                  text: "Math" 
                },
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider5.webp',
                  text: "Science of science" 
                },
                {
                  background: doatkolom_object.blocks + 'box-slider-1/img/box_slider6.webp',
                  text: "Math" 
                },
            ] })
        }
    },[])

	return (
		<div className="max-w-screen-xl lg:px-8 px-5 mx-auto py-12 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {
                    attributes.box_slider?.map((item,index)=>(
                        <div key={index} className="mb-1 text-center rounded-lg p-4">
                            <picture>
                                <img width="50" height="60" className="object-cover" src={item.background} alt="service-image" />
                            </picture>
                            <p className="m-0 mt-3 text-base font-secondary font-normal text-primary">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}