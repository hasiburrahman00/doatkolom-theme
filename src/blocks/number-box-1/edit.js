export default function Edit({ attributes}) {

	return (
		<div className="max-w-screen-xl mx-auto py-20">
            <div className="grid grid-cols-7 gap-4">
                {
                    attributes.number_box.map((item,index)=>(
                        <div key={index} className="bg-primary_light rounded-md py-5 text-center">
                            <h3 className="m-0 text-primary font-secondary font-weight_tertiary text-2xl">{item.number}</h3>
                            <p className="font-secondary text-title font-weight_tertiary text-lg m-0 mt-4">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}