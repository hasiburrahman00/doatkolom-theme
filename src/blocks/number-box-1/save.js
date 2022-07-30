export default function Save({ attributes }) {
	return (
        <div className="max-w-screen-xl mx-auto py-20 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {
                    attributes.number_box.map((item,index)=>(
                        <div key={index} className="bg-primary_light rounded-md py-5 text-center">
                            <h3 className="m-0 text-primary font-primary font-weight_tertiary text-3xl">{item.number} +</h3>
                            <p className="font-secondary text-title font-weight_primary text-base m-0 mt-2">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}