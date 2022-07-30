import Helper from "../../utils/Helper";
export default function Save({ attributes }) {
    return (
        <div className="banner-wrapper bg-cover bg-no-repeat bg-center py-24">
            <div className="max-w-screen-xl mx-auto px-5">
               <div className="max-w-[600px] mx-auto text-center py-10 px-5 md:px-14 bg-white rounded-lg relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-secondary before:rounded-tl-lg before:rounded-tr-lg">
                    <h2 
                        className="font-primary font-weight_tertiary text-title text-3xl md:text-4xl m-0 mb-9" 
                        dangerouslySetInnerHTML={{__html: Helper.stringHighlight(attributes.title)}}
                    />

                    <div className="text-left mb-3 md:mb-5">
                        <p 
                            className="m-0 font-secondary font-weight_primary text-title_description text-base md:text-lg"
                            dangerouslySetInnerHTML={{__html: Helper.wysiwyg(attributes.description)}}
                        />
                    </div>
               </div>
            </div>
        </div>
	);
}