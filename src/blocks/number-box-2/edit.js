export default function Edit({ attributes}) {

	return (
		<div className="py-12 sm:py-24 bg-light_gray">
            <div className="max-w-screen-xl lg:px-0 px-5 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {
                    attributes.number_box.map((item,index)=>(
                        <div key={index} className="w-[250px]">
                            <h3 className="font-secondary font-bold text-3xl sm:text-6xl m-0 mt-5">{item.number} +</h3>
                            <p className="m-0 font-secondary font-weight_secondary text-base sm:text-xl">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
	);
}