export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl mx-auto py-5 px-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-4">
                {
                    attributes.number_box.map((item,index)=>(
                        <div key={index} className="bg-primary_light rounded-md py-5 text-center px-2">
                            <h3 className="m-0 text-primary font-primary font-weight_tertiary text-2xl md:text-3xl">{item.number}</h3>
                            <p className="font-secondary text-black font-weight_primary text-base m-0 mt-2">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}