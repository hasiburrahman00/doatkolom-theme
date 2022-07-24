import Helper from "../../utils/Helper";
const { useEffect } = wp.element;

export default function Edit({ attributes, setAttributes}) {

    wp.element.useEffect(()=>{
        if(!attributes.background ) {
            setAttributes({background: doatkolom_object.blocks + 'mission-1/img/mission-background.webp'})
        }
    },[])

	return (
		<div className="banner-wrapper bg-cover bg-no-repeat bg-center py-24">
            <div className="max-w-screen-xl mx-auto">
               <div className="max-w-[600px] mx-auto text-center py-10 px-5 md:px-14 bg-white rounded-lg relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-red-600 before:rounded-tl-lg before:rounded-tr-lg">
                    <h2 
                        className="font-secondary font-bold text-black-90 text-3xl md:text-4xl m-0 mb-9" 
                        dangerouslySetInnerHTML={{__html: Helper.stringHighlight(attributes.title)}}
                    />
                    
                    {
                        attributes.description?.map((item,index)=>(
                            <div key={index} className="text-left mb-3 md:mb-5">
                                <p className="m-0 font-secondary font-normal text-black-90 text-base md:text-lg">{item.text}</p>
                            </div>
                        ))
                    }
               </div>
            </div>
        </div>
	);
}